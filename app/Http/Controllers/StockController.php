<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductStock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    const relations = ['stocks'];
    public function manageStock($product, $quantity, $user)
    {
        $data = [
            'product_id' => $product->id,
            'quantity' => $quantity,
            'user_id' => $user->id,
        ];
        ProductStock::create($data);
    }

    public function index(){
        $stock = Product::with(self::relations)->orderBy('name')->get();
        return response(['data'=>$stock]);
    }
}
