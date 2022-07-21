<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class SellRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'product' => 'required',
            'product.id' => 'exists:products,id',
            'sell' => 'required|array',
            'sell.*.code.id' => 'exists:tags,id',
        ];
    }

    public function messages(): array
    {
        return [
            'product.required' => 'El producto es obligatorio',
            'product.id.exists' => 'El producto debe existir en base de datos',
            'sell.required' => 'El listado de los productos en venta es obligatorio',
            'sell.array' => 'El listado de los productos debe ser un arreglo de objetos',
        ];
    }

    public function failedValidation($validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }

}
