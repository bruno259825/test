<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoContribuyente extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'id',
        'nombre',
        'estado'
    ];

    public function entidades()
    {
        return $this->hasMany('App\Models\Entidade',"id_tipo_contribuyente");
    }
}
