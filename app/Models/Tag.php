<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Milon\Barcode\DNS1D;

class Tag extends Model
{
    protected $guarded = ['id'];
    protected $appends = [
        'barcode'
    ];

    public function barcode()
    {
        return  DNS1D::getBarcodePNG($this->tag,'C39') ;
    }

    public function getBarcodeAttribute()
    {
        return $this->barcode();
    }
}
