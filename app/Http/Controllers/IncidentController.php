<?php

namespace App\Http\Controllers;

use App\Http\Requests\IncidentRequest;
use App\Models\Incident;

class IncidentController extends Controller
{
    public function index()
    {
        $incidents = Incident::latest()->get();

        return response(['data' => $incidents ], 200);
    }

    public function store(IncidentRequest $request)
    {
        $incident = Incident::create($request->all());

        return response(['data' => $incident ], 201);

    }

    public function show($id)
    {
        $incident = Incident::findOrFail($id);

        return response(['data' => $incident ], 200);
    }

    public function update(IncidentRequest $request, $id)
    {
        $incident = Incident::findOrFail($id);
        $incident->update($request->all());

        return response(['data' => $incident ], 200);
    }

    public function destroy($id)
    {
        Incident::destroy($id);

        return response(['data' => null ], 204);
    }
}
