<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'photo' => 'required|image|max:10240',
            'tag' => 'required',
            'category_id' => 'required|exists:categories,id',
            'quantity' => 'numeric',
            'cost_price' => 'numeric',
            'sell_price' => 'numeric',
        ];

    }
    public function messages(): array
    {
        return [
            'name.required' => 'El nombre del producto es obligatorio',
            'photo.required' => 'La foto del producto es obligatoria',
            'photo.image' => 'La foto del producto debe ser una imagen',
            'photo.size' => 'La foto del producto debe ser menor o igual que 10mb',
            'tag.required' => 'La etiqueta del producto es obligatoria',
            'category_id.required' => 'La categoría del producto es obligatoria',
            'quantity.numeric' => 'La cantidad del producto es obligatoria',
            'cost_price.numeric' => 'El costo de compra del producto es obligatorio',
            'sell_price.numeric' => 'El costo de venta del producto es obligatorio',
        ];
    }

    public function failedValidation($validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }


}
