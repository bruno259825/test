<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entidades', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_tipo_documento');
            $table->foreign('id_tipo_documento')->references('id')->on('tipo_documentos');
            $table->string("nro_documento",25);
            $table->string("razon_social",100);
            $table->string("nombre_comercial",100)->nullable()->default(null);
            $table->unsignedBigInteger('id_tipo_contribuyente')->nullable()->default(null);
            $table->foreign('id_tipo_contribuyente')->references('id')->on('tipo_contribuyentes');
            $table->string("direccion",250)->nullable()->default(null);
            $table->string("telefono",50)->nullable()->default(null);
            $table->boolean("estado")->default(true);
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entidades');
    }
}
