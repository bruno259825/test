<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entidade extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'id',
        'id_tipo_documento',
        'nro_documento',
        'razon_social',
        'nombre_comercial',
        'id_tipo_contribuyente',
        'direccion',
        'telefono',
        'estado'
    ];

    public function tipo_contribuyente()
    {
        return $this->belongsTo('App\Models\TipoContribuyente',"id");
    }

    public function tipo_documento()
    {
        return $this->belongsTo('App\Models\TipoDocumento',"id");
    }
}
