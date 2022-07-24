<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Requests\SellRequest;
use App\Models\Lote;
use App\Models\Product;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    const relations = ['category', 'lotes.tags'];


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
        if ($product->stock !== $stock) {
            $stock = $stock - $product->stock;
            $user = auth()->user();
            (new StockController())->manageStock($product, $stock, $user);
        }
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
        list($ended, $message) = (new TagController())->sellProductByTag($request->sell, $user);
        return response(['data' => $message], $ended ? 200 : 400);
    }

    public function downloadTag(Request $request){
        $data = $request->all();
        $lote = Lote::with(['tagsAll','product','creator'])->findOrFail($data['lote_id']);

        $pdf = PDF::loadView('pdf.tags', compact('lote'));
        return $pdf->download('tags.pdf');
    }
}
