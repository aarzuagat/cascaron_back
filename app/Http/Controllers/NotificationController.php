<?php

namespace App\Http\Controllers;

use App\Http\Requests\NotificationRequest;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::latest()->get();

        return response(['data' => $notifications ], 200);
    }

    public function store(NotificationRequest $request)
    {
        $notification = Notification::create($request->all());

        return response(['data' => $notification ], 201);

    }

    public function show($id)
    {
        $notification = Notification::findOrFail($id);

        return response(['data' => $notification ], 200);
    }

    public function update(NotificationRequest $request, $id)
    {
        $notification = Notification::findOrFail($id);
        $notification->update($request->all());

        return response(['data' => $notification ], 200);
    }

    public function destroy($id)
    {
        Notification::destroy($id);

        return response(['data' => null ], 204);
    }
}
