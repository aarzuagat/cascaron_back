<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Lote extends Model
{
    protected $guarded = ['id'];
    protected $appends = [
        'quantityStock',
        'quantityReal',
    ];

    public function tags()
    {
        return $this->tagsAll()->whereNull('deleted_at');
    }

    public function tagsAll()
    {
        return $this->hasMany(Tag::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function quantityStock()
    {
        if ($this->product()->first()->tag === 'Todas las unidades')
            return $this->tags()->count();
        return $this->quantity;
    }

    public function getQuantityStockAttribute()
    {
        return $this->quantityStock();
    }

    public function quantityReal()
    {
        if ($this->product()->first()->tag === 'Todas las unidades')
            return $this->tagsAll()->count();
        return $this->quantity + $this->lote_operations()->sum('quantity');
    }

    public function getQuantityRealAttribute()
    {
        return $this->quantityReal();
    }

    public function lote_operations(){
        return $this->hasMany(StockOperation::class);
    }
}
