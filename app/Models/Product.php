<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $appends = [
        'quantity'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function lotes()
    {
        return $this->hasMany(Lote::class);
    }

    public function quantity()
    {
        $lotes = $this->lotes()->pluck('id')->toArray();
        return Tag::whereIn('lote_id', $lotes)->whereNull('deleted_at')->count();
    }

    public function getQuantityAttribute()
    {
        return $this->quantity();
    }
}
