<?php

namespace App\Http\Requests;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class ProductRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
//        $stock = Product::find($this->id);
//        return [
//            'id' => [
//                'required',
//                'integer',
//                'exists:products,id',
//            ],
//            'stock' => [
//                'required',
//                'numeric',
//                "lte:{$stock->stock}"
//            ]
//        ];
    }

    protected function prepareForValidation()
    {

    }

    public function messages()
    {
        return [
            'id.required' => 'El id del producto es un campo obligatorio',
            'id.exists' => 'El id del producto debe corresponder a un id válido',
            'stock.required' => 'El stock es un campo obligatorio',
            'stock.numeric' => 'El stock del producto debe ser un campo numérico',
            'stock.lte' => 'El stock del producto debe ser menor o igual a la cantidad disponible',
        ];
    }

    public function failedValidation($validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
