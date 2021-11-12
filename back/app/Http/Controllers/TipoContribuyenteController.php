<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TipoContribuyente;
use App\Http\Resources\TipoContribuyente as TipoContribuyenteResource;
use App\Http\Resources\TipoContribuyenteCollection;

class TipoContribuyenteController extends Controller
{
    public function index(Request $request){

        return new TipoContribuyenteCollection(TipoContribuyente::all());
    }
}
