<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockTraceRequest;
use App\Models\StockTrace;

class StockTraceController extends Controller
{
    public function index()
    {
        $stocktraces = StockTrace::latest()->get();

        return response(['data' => $stocktraces ], 200);
    }

    public function store(StockTraceRequest $request)
    {
        $stocktrace = StockTrace::create($request->all());

        return response(['data' => $stocktrace ], 201);

    }

    public function show($id)
    {
        $stocktrace = StockTrace::findOrFail($id);

        return response(['data' => $stocktrace ], 200);
    }

    public function update(StockTraceRequest $request, $id)
    {
        $stocktrace = StockTrace::findOrFail($id);
        $stocktrace->update($request->all());

        return response(['data' => $stocktrace ], 200);
    }

    public function destroy($id)
    {
        StockTrace::destroy($id);

        return response(['data' => null ], 204);
    }
}
