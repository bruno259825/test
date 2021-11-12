<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entidade;
use App\Http\Resources\Entidad as EntidadResource;
use App\Http\Resources\EntidadCollection;


class EntidadController extends Controller
{
    
    public function index(Request $request){

        return new EntidadCollection($entidades=Entidade::all());
    }

    public function delete(Entidade $entidad){

        $entidad->delete();
        
        return response()->json(null, 204);

    }
}
