<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Models\Product;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::latest()->get();

        return response(['data' => $tags], 200);
    }

    public function store($lote): bool
    {
        $quantity = $lote->quantity;
        $tags = [];
        $product = Product::with('category')->find($lote->product_id);
        $const = Tag::count();
        foreach (range(1, (double)$quantity) as $index) {
            $hex = dechex($const + $index);
            $data = [
                'lote_id' => $lote->id,
                'tag' => $this->generaTag($product, false, $product->category_id  . ($hex))
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


    /**
     * @param object $product "Producto al que generar el slug o uuid"
     * @param bool $generate_uuid "True si desea obtener un uuid, sino un slug"
     * @param string|null $prefix "elemento a apendizar al slug"
     * @return string "UUID o slug de etiqueta"
     */
    public function generaTag(object $product, bool $generate_uuid = true, string $prefix = null): string
    {
        if ($generate_uuid)
            return $product->id . Uuid::uuid4();
        else {
            return Str::slug("Producto-{$prefix}");
        }
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
        if (Tag::whereIn('id', $filtered)->whereNotNull('deleted_at')->count()) {
            return [false, 'Existen productos vendidos. Por favor, seleccione de nuevo'];
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
            return [false, 'Imposible completar la venta en estos momentos. Contacte al administrador'];
        }
        return [true, 'Venta completada'];

    }
}
