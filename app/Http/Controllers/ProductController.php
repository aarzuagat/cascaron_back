<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get();

        return response(['data' => $products], 200);
    }

    public function store(ProductRequest $request)
    {
        $path = $this->storeImage($request);
        $data = $request->all();
        $data['photo'] = $path;
        Log::debug($data);
        $product = Product::create($data);
        return response(['data' => $product], 201);
    }

    public function storeImage($request): ?string
    {
        if ($request->hasFile('photo')) {
            $image = $request->file('photo');
            $date = date('Y/m/d/');
            $name = "{$date}{$image->getClientOriginalName()}";
            $raw_path = $image->storeAs('products', $name,'public');
            return 'storage/' . $raw_path;
        }
        return null;
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        return response(['data' => $product], 200);
    }

    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return response(['data' => $product], 200);
    }

    public function destroy($id)
    {
        Product::destroy($id);

        return response(['data' => null], 204);
    }
}
