<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockOperation extends Model
{
    protected $guarded = ['id'];

    public function lote()
    {
        return $this->belongsTo(Lote::class);
    }

    public function tags()
    {
        return $this->hasMany(Tag::class);
    }
}
