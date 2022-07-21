<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoteRequest;
use App\Models\Lote;
use App\Models\Product;
use Carbon\Carbon;

class LoteController extends Controller
{
    const relations = ['lotes.tags'];

    public function manageStock($product, $user, $quantity, $cost_price, $sell_price, $buy_date = null)
    {
        $data = [
            'quantity' => $quantity,
            'cost_price' => $cost_price,
            'sell_price' => $sell_price,
            'buy_date' => $buy_date ?? Carbon::now(),
            'product_id' => $product->id,
            'created_by' => $user->id,
        ];
        $lote = Lote::create($data);
        (new TagController())->store($lote);
    }

    public function index()
    {
        $stock = Product::with(self::relations)->orderBy('name')->get();
        return response(['data' => $stock]);
    }

    public function store(LoteRequest $request)
    {
        $lote = Lote::create($request->all());
        return response(['data' => $lote], 201);
    }

    public function show($id)
    {
        $lote = Lote::findOrFail($id);
        return response(['data' => $lote], 200);
    }

    public function update(LoteRequest $request, $id)
    {
        $lote = Lote::findOrFail($id);
        $lote->update($request->all());

        return response(['data' => $lote], 200);
    }

    public function destroy($id)
    {
        Lote::destroy($id);

        return response(['data' => null], 204);
    }
}
