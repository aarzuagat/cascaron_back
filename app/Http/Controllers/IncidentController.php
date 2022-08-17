<?php

namespace App\Http\Controllers;

use App\Http\Requests\IncidentRequest;
use App\Models\Incident;
use Carbon\Carbon;

class IncidentController extends Controller
{
    const relations = ['products'];

    public function index()
    {
        $incidents = Incident::with(self::relations)->whereNull('deleted_at')->latest()->get();

        return response(['data' => $incidents], 200);
    }

    public function store(IncidentRequest $request)
    {
        $data = $request->all();
        $data['user_id'] = auth()->user()->id;
        $products = $data['products_id'];
        $incident = Incident::create($data);
        $incident->products()->sync($products);

        return response(['data' => $incident], 201);

    }

    public function show($id)
    {
        $incident = Incident::findOrFail($id);

        return response(['data' => $incident], 200);
    }

    public function update(IncidentRequest $request, $id)
    {
        $data = $request->all();
        $data['user_id'] = auth()->user()->id;
        $products = $data['products_id'];
        $incident = Incident::findOrFail($id);
        $incident->update($data);
        $incident->products()->sync($products);

        return response(['data' => $incident], 200);
    }

    public function destroy($id)
    {
        $incident = Incident::findOrFail($id);
        $incident->update([
            'deleted_at' => Carbon::now(),
            'deleted_by' => auth()->user()->id,
        ]);

        return response(['data' => true], 204);
    }

    public function filter(IncidentRequest $request)
    {
        $start_date = $request->start;
        if ($start_date) {
            $start_date = (new StockOperationController())->createDate($start_date);
        }
        $end_date = $request->end;
        if ($end_date) {
            $end_date = (new StockOperationController())->createDate($end_date);
        }
        $incidents = Incident::with(self::relations)->whereNull('deleted_at')
            ->whereBetween('created_at', [$start_date, $end_date]);
        return response(['data' => $incidents->get()]);
    }
}
