<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

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
        if ($this->tag === 'Todas las unidades') {
            $lotes = $this->lotes()->pluck('id')->toArray();
            return Tag::whereIn('lote_id', $lotes)->whereNull('deleted_at')->count();
        } else {
            return $this->lotes()->sum('quantity');
        }
    }

    public function getQuantityAttribute()
    {
        return $this->quantity();
    }
}
