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
        $stockoperations = StockOperation::with(self::relations)->whereNull('deleted_at')->latest()->get();

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
                $operation->deleted_at = Carbon::now();
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
            $operation->deleted_at = Carbon::now();
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
        $operations = StockOperation::with('lote.product')->whereNull('deleted_at')
            ->whereBetween('created_at', [$start_date, $end_date]);
        return response(['data' => $operations->get()]);
    }

    public function createDate($stringDate, $format = 'd/m/Y')
    {
        $date = date_create_from_format($format, $stringDate);
        return date_format($date, 'Y-m-d H:i');
    }
}
