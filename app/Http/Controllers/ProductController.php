<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get();

        return response(['data' => $products ], 200);
    }

    public function store(ProductRequest $request)
    {
        $product = Product::create($request->all());

        return response(['data' => $product ], 201);

    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        return response(['data' => $product ], 200);
    }

    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return response(['data' => $product ], 200);
    }

    public function destroy($id)
    {
        Product::destroy($id);

        return response(['data' => null ], 204);
    }
}
