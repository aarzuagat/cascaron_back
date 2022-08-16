<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Requests\SellRequest;
use App\Models\Lote;
use App\Models\Product;
use App\Models\StockOperation;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    const relations = ['category'];
//    const relations = ['category', 'lotes.tags'];


    public function index()
    {
        $products = Product::with(self::relations)->whereIsActive(true)->latest()->get();
        return response(['data' => $products], 200);
    }

    public function store(ProductRequest $request)
    {
        $data = $request->all();
        $path = $this->storeImage($request);
        if ($path) {
            $data['photo'] = $path;
        }
        $product = Product::create($data);
        $user = auth()->user();
        (new LoteController())->manageStock($product, $user, $request->quantity, $request->cost_price, $request->sell_price);
        return response(['data' => $product], 201);
    }

    public function storeImage($request): ?string
    {
        if ($request->hasFile('photo')) {
            $image = $request->file('photo');
            $date = date('Y/m/d/');
            $name = "{$date}{$image->getClientOriginalName()}";
            $raw_path = $image->storeAs('products', $name, 'public');
            return 'storage/' . $raw_path;
        }
        return null;
    }


    public function show($id)
    {
        $product = Product::with(self::relations)->findOrFail($id);
        return response(['data' => $product], 200);
    }

    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);
        $data = $request->all();
        $path = $this->storeImage($request);
        if ($path) {
            $data['photo'] = $path;
        }
        $stock = $request->stock;
//        if ($product->stock !== $stock) {
//            $stock = $stock - $product->stock;
//            $user = auth()->user();
//            (new LoteController())->manageStock($product, $stock, $user);
//        }
        $product->update($data);
        return response(['data' => $product], 200);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->is_active = false;
        $product->save();

        return response(['data' => null], 204);
    }

    public function sellProduct(SellRequest $request)
    {
        $user = auth()->user();
        $product = Product::findOrFail($request->product['id']);
        if ($product['tag'] === 'Todas las unidades')
            list($ended, $message) = (new TagController())->sellProductByTag($request->sell, $user);
        else {
            if ($request['lote']) {
                $lotes = Lote::whereId($request['lote'])->get();
            } else
                $lotes = Lote::whereProductId($request->product['id'])->get()->sortByDesc('quantityStock');
            $sumTotal = $lotes->sum('quantityStock');
            $quantity = (float)$request->quantity;
            if ($quantity > $sumTotal) {
                $message = 'Stock insuficiente para ser actualizado';
                $ended = false;
            } else {
                foreach ($lotes as $lote) {
                    $stock = $lote->quantityStock;
                    if ($quantity > 0 && $stock > 0) {
                        if ($stock >= $quantity) {
                            $lote->decrement('quantity', $quantity);
                            $this->storeRawDiscount($quantity, $lote->id);
                            $quantity = 0;
                        } elseif ($stock < $quantity) {
                            Log::debug($stock);
                            $lote->decrement('quantity', $stock);
                            $this->storeRawDiscount($stock, $lote->id);
                            $quantity -= $stock;
                        }
                    }
                }
                if ($quantity === 0) {
                    $message = 'Stock actualizado correctamente';
                    $ended = true;
                } else {
                    $message = 'Stock insuficiente para ser actualizado';
                    $ended = false;
                }
            }
        }
        return response(['data' => $message], $ended ? 200 : 400);
    }

    public function storeRawDiscount($quantity, $lote_id)
    {
        $data = [
            'quantity' => $quantity,
            'lote_id' => $lote_id,
            'tag' => "Lote-{$lote_id}",
            'sold_by' => auth()->user()->id,
        ];
        $stock_operation = StockOperation::create($data);
        return $stock_operation;
    }

    public function downloadTag(Request $request)
    {
        set_time_limit(10000);
        $data = $request->all();
        $lote = Lote::with(['tagsAll', 'product', 'creator'])->findOrFail($data['lote_id']);

        $pdf = PDF::loadView('pdf.tags', compact('lote'));
        return $pdf->download("lote-{$lote->id}.pdf");
    }
}
