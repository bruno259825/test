<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\TipoContribuyente as TipoContribuyenteResource;

class Entidad extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'tipo_documento' => $this->id_tipo_documento,
            'nro_documento' => $this->nro_documento,
            'razon_social' => $this->razon_social,
            'nombre_comercial' => $this->nombre_comercial,
            'tipo_contribuyente' => $this->tipo_contribuyente,
            'tipo_documento' => $this->tipo_documento,
            'direccion' => $this->direccion,
            'telefono' => $this->telefono,
            'estado' => $this->estado,
        ];
    }
}
