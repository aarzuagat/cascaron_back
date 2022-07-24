<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lote extends Model
{
    protected $guarded = ['id'];
    protected $appends = [
        'quantity',
        'quantityReal',
    ];

    public function tags(){
        return $this->tagsAll()->whereNull('deleted_at');
    }

    public function tagsAll(){
        return $this->hasMany(Tag::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }

    public function creator(){
        return $this->belongsTo(User::class,'created_by');
    }

    public function quantity()
    {
        return Tag::where('lote_id', $this->id)->whereNull('deleted_at')->count();
    }

    public function getQuantityAttribute()
    {
        return $this->quantity();
    }

    public function quantityReal()
    {
        return Tag::where('lote_id', $this->id)->count();
    }

    public function getQuantityRealAttribute()
    {
        return $this->quantity();
    }
}
