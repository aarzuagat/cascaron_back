<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    const relations = ['category'];


    public function index()
    {
        $products = Product::with(self::relations)->whereIsActive(true)->latest()->get();
        return response(['data' => $products], 200);
    }

    public function store(ProductRequest $request)
    {
        $path = $this->storeImage($request);
        $data = $request->all();
        if ($path) {
            $data['photo'] = $path;
        }
        $product = Product::create($data);
        $stock = $request->stock;
        $user = auth()->user();
        (new StockController())->manageStock($product, $stock, $user);
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

    public function sellProduct(ProductRequest $request)
    {
        $product = Product::findOrFail($request->id);
        $stock = $request->stock;
        $stockReal =  $product->stock - $stock;
        $product->stock = $stockReal;
        $user = auth()->user();
        (new StockController())->manageStock($product, -1*$stock, $user);
        $product->save();
        return response(['data' => $product], 200);
    }
}
