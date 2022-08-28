<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockOperationRequest;
use App\Models\Lote;
use App\Models\Product;
use App\Models\StockOperation;
use App\Models\StockTrace;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class StockOperationController extends Controller
{
    const relations = ['lote.product', 'tags'];

    public function index()
    {
        $stockoperations = StockOperation::with(self::relations)->whereNull('canceled_at')->latest()->get();

        return response(['data' => $stockoperations], 200);
    }

    public function store(StockOperationRequest $request)
    {
        $stockoperation = StockOperation::create($request->all());

        return response(['data' => $stockoperation], 201);

    }

    public function show($id)
    {
        $stockoperation = StockOperation::findOrFail($id);

        return response(['data' => $stockoperation], 200);
    }

    public function update(StockOperationRequest $request, $id)
    {
        $stockoperation = StockOperation::findOrFail($id);
        $stockoperation->update($request->all());

        return response(['data' => $stockoperation], 200);
    }

    public function destroy($id)
    {
        StockOperation::destroy($id);

        return response(['data' => null], 204);
    }

    public function cancel(StockOperationRequest $request)
    {
        $is_partial = $request->is_partial ?? false;
        $operation = StockOperation::with('tags')->findOrFail($request->operation);
        $quantity = $operation->quantity;
        $details = $request->details;
        $lote = Lote::with('product')->find($operation->lote_id);
        if ($is_partial) {
            if ($lote->product->tag === 'Todas las unidades') {
                $tag_ids = $request->partial_list;
                $quantity = count($tag_ids);
                $result = Tag::whereIn('id', $tag_ids)->update([
                    'sold_by' => null,
                    'deleted_at' => null,
                    'stock_operation_id' => null
                ]);
            } else {
                $quantity = $request->quantity;
                //devolver al producto
                $lote->increment('quantity', $quantity);
                //devolver al lote
            }
            $description = "Cancela el pedido $operation->id parcialmente con $quantity unidades";
            StockTrace::create([
                'user_id' => auth()->user()->id,
                'action' => $description,
                'details' => $details,
            ]);
            $operation->decrement('quantity', $quantity);
            Log::debug($operation->quantity);
            if ($operation->quantity === 0) {
                $operation->canceled_by = auth()->user()->id;
                $operation->canceled_at = Carbon::now();
                $operation->save();
            }
            $result = true;

        } else {
            if ($lote->product['tag'] === 'Todas las unidades') {
                $tags = $operation->tags->pluck('id');
                $result = Tag::whereIn('id', $tags)->update([
                    'sold_by' => null,
                    'deleted_at' => null,
                    'stock_operation_id' => null
                ]);
            } else {
                $lote->increment('quantity', $quantity);
            }
            $description = "Cancela el pedido $operation->id completamente con $quantity unidades";
            StockTrace::create([
                'user_id' => auth()->user()->id,
                'action' => $description,
                'details' => $details,
            ]);
            $operation->canceled_by = auth()->user()->id;
            $operation->canceled_at = Carbon::now();
            $operation->save();
        }
        return response(['data' => true]);
    }

    public function filterOperations(StockOperationRequest $request)
    {
        $start_date = $request->start;
        if ($start_date) {
            $start_date = $this->createDate($start_date);
        }
        $end_date = $request->end;
        if ($end_date) {
            $end_date = $this->createDate($end_date);
        }
        $operations = StockOperation::with('lote.product')->whereNull('canceled_at')
            ->whereBetween('created_at', [$start_date, $end_date]);
        return response(['data' => $operations->get()]);
    }

    public function createDate($stringDate, $just_date = false, $format = 'd/m/Y')
    {
        $date = date_create_from_format($format, $stringDate);
        if ($just_date)
            return date_format($date, 'Y-m-d');
        else
            return date_format($date, 'Y-m-d H:i');
    }

    public function find(StockOperationRequest $request)
    {
        if ($request->date)
            $date = $this->createDate($request->date, true);
        else
            $date = $this->createDate(date('d/m/Y'), true);

        $stockoperations = StockOperation::with(self::relations)
            ->whereNull('canceled_at')
            ->whereDate('created_at', $date)
            ->latest()->get();

        return response(['data' => $stockoperations]);
    }

    public function change(StockOperationRequest $request)
    {
        $operation = StockOperation::with('tags', 'lote')->findOrFail($request->operation);
        $details = $request->details;
        $new_product = Product::with('lotes')->find($request->product_selected['id']);
        $quantity_new = (double)($new_product['tag'] === 'Todas las unidades' ? count($request->tags_selected) : $request->quantity_selected);
        $new_lote_id = null;
        if ($new_product->id !== $operation->lote['product_id']) {
            $operation = StockOperation::create([
                'quantity' => 0,
                'lote_id' => null,
                'tag' => $new_product['name'],
                'sold_by' => auth()->user()->id,
            ]);
        }

        if ($new_product['tag'] === 'Todas las unidades') {
            Tag::whereIn('id', $request->tags_selected)->update([
                'sold_by' => auth()->user()->id,
                'deleted_at' => Carbon::now(),
                'stock_operation_id' => $operation->id
            ]);
            $new_lote_id = Tag::whereIn('id', $request->tags_selected)->first()->lote_id;
            $description = "Agrega $quantity_new unidades del producto $new_product->name al pedido $operation->id";
        } else {
            $lotes = $new_product->lotes;
            $cont = $quantity_new;

            foreach ($lotes as $lote_item) {
                if ($cont > 0) {
                    if ($lote_item['quantity'] >= $cont) {
                        $lote_item->decrement('quantity', $cont);
                        if ($new_lote_id === null) $new_lote_id = $lote_item['id'];
                        break;
                    } else {
                        if ($new_lote_id === null) $new_lote_id = $lote_item['id'];
                        $cont -= $lote_item['quantity'];
                        $lote_item->decrement('quantity', $lote_item['quantity']);
                    }
                }
            }
            $operation->tag = $new_product->name;
            $description = "Agrega $quantity_new unidades del producto $new_product->name al pedido $operation->id";
        }
        $operation->increment('quantity', $quantity_new);
        $operation->tag = $this->generateName($operation->name, $new_product);
        if ($new_lote_id !== null)
            $operation->lote_id = $new_lote_id;
        $operation->save();
        StockTrace::create([
            'user_id' => auth()->user()->id,
            'action' => $description,
            'stock_operation_id' => $operation->id,
            'details' => $details,
        ]);
        return response(['data' => true]);
    }

    function generateName($old_name, $product)
    {
        $parts = explode('-', $old_name);
        if (count($parts)) {
            if (strlen($product->name)) {
                array_push($parts, $product->name);
                $old_name_array = $parts;
            }
        } else
            $old_name_array = [$old_name];

        $final_array = array_unique($old_name_array);
        return implode('-', $final_array);


    }

    public function deleteItem(StockOperationRequest $request)
    {
        $tag_id = $request->id;
        $details = $request->details;
        $tag = Tag::findOrFail($tag_id);
        $stock_operation = $tag->stock_operation_id;
        $so = StockOperation::find($stock_operation);
        $so->decrement('quantity');
        $tag->update([
            'sold_by' => null,
            'deleted_at' => null,
            'stock_operation_id' => null
        ]);
        $description = "Elimina el producto con etiqueta $tag->tag";
        StockTrace::create(
            [
                'user_id' => auth()->user()->id,
                'action' => $description,
                'stock_operation_id' => $stock_operation,
                'details' => $details,
            ]);
        return response(['data' => true]);
    }

    public function updateStockQuantities($product, $operation, $quantity, $is_increment = true)
    {

        if ($product['tag'] === 'Todas las unidades') {
            if ($is_increment)
                $operation->increment('quantity', $quantity);
            else
                $operation->decrement('quantity', $quantity);
        } else {
            $lote = $operation->lote;
//            $lote_item->decrement('quantity', $cont);
        }
    }

    public function reset(): bool
    {
        $st = Lote::where('id','>=',1)->update([
            'quantity'=>15
        ]);
        $tag = Tag::where('id','>=',1)->update([
            'sold_by' => null,
            'deleted_at' => null,
            'stock_operation_id' => null
        ]);
        StockTrace::whereNotNull('stock_operation_id')->delete();
//        StockTrace::truncate();
        $st = StockOperation::truncate();
        return true;
    }

}
