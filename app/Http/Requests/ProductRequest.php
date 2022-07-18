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
    }

    public function failedValidation($validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
