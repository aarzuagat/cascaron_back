<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Ramsey\Uuid\Uuid;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::latest()->get();

        return response(['data' => $tags], 200);
    }

    public function store($lote)
    {
        $quantity = $lote->quantity;
        $tags = [];
        foreach (range(1, $quantity) as $index) {
            $data = [
                'lote_id' => $lote->id,
                'tag' => $this->generaTag($lote->product_id)
            ];
            array_push($tags, $data);
        }
        try {
            Tag::upsert(
                $tags,
                ['tag']
            );
        } catch (\Exception $e) {
            return false;
        }

        return true;

    }

    public function generaTag($product_id)
    {
        return $product_id . Uuid::uuid4();
    }

    public function show($id)
    {
        $tag = Tag::findOrFail($id);

        return response(['data' => $tag], 200);
    }

    public function update(TagRequest $request, $id)
    {
        $tag = Tag::findOrFail($id);
        $tag->update($request->all());

        return response(['data' => $tag], 200);
    }

    public function destroy($id)
    {
        Tag::destroy($id);

        return response(['data' => null], 204);
    }

    public function sellProductByTag($sellings, $user)
    {
        $filtered = [];
        foreach ($sellings as $selling) {
            $tag = $selling['code'];
            array_push($filtered, $tag['id']);
        }
        if (Tag::whereIn('id', $filtered)->whereNotNull('deleted_at')->count()){
            return [false,'Existen productos vendidos. Por favor, seleccione de nuevo'];
        }
        try {
            Tag::whereIn('id', $filtered)->update(
                [
                    'deleted_at' => Carbon::now(),
                    'sold_by' => $user->id
                ]
            );
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return [false,'Imposible completar la venta en estos momentos. Contacte al administrador'];
        }
        return [true,'Venta completada'];

    }
}
