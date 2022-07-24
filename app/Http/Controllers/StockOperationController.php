<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockOperationRequest;
use App\Models\StockOperation;

class StockOperationController extends Controller
{
    public function index()
    {
        $stockoperations = StockOperation::latest()->get();

        return response(['data' => $stockoperations ], 200);
    }

    public function store(StockOperationRequest $request)
    {
        $stockoperation = StockOperation::create($request->all());

        return response(['data' => $stockoperation ], 201);

    }

    public function show($id)
    {
        $stockoperation = StockOperation::findOrFail($id);

        return response(['data' => $stockoperation ], 200);
    }

    public function update(StockOperationRequest $request, $id)
    {
        $stockoperation = StockOperation::findOrFail($id);
        $stockoperation->update($request->all());

        return response(['data' => $stockoperation ], 200);
    }

    public function destroy($id)
    {
        StockOperation::destroy($id);

        return response(['data' => null ], 204);
    }
}
