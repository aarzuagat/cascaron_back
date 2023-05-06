<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Incident extends Model
{
    protected $guarded = ['id'];

    public function products(){
        return $this->belongsToMany(Product::class,'incident_product');
    }
}