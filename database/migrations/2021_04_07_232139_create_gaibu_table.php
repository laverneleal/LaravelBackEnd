<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaibuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gaibu', function (Blueprint $table) {
            $table->id();
            $table->string('unique_id')->unique('unique_id');
            $table->json('roofs')->nullable($value = true);
            $table->json('parapets')->nullable($value = true);
            $table->json('roofceilings')->nullable($value = true);
            $table->json('nokitenmizukiris')->nullable($value = true);
            $table->json('fasciaboards')->nullable($value = true);
            $table->json('amatois')->nullable($value = true);
            $table->json('tatetois')->nullable($value = true);
            $table->json('mizukiris')->nullable($value = true);
            $table->json('sash')->nullable($value = true);
            $table->json('balconytesuris')->nullable($value = true);
            $table->json('balconycopings')->nullable($value = true);
            $table->json('balconyfloors')->nullable($value = true);
            $table->json('balconyglass')->nullable($value = true);
            $table->json('balconytesuris2')->nullable($value = true);
            $table->json('balconycopings2')->nullable($value = true);
            $table->json('balconyfloors2')->nullable($value = true);
            $table->json('balconyglass2')->nullable($value = true);
            $table->json('balconytesuris3')->nullable($value = true);
            $table->json('balconycopings3')->nullable($value = true);
            $table->json('balconyfloors3')->nullable($value = true);
            $table->json('balconyglass3')->nullable($value = true);
            $table->json('balconytesuris3F')->nullable($value = true);
            $table->json('balconycopings3F')->nullable($value = true);
            $table->json('balconyfloors3F')->nullable($value = true);
            $table->json('balconyglass3F')->nullable($value = true);
            $table->json('balconytesuris23F')->nullable($value = true);
            $table->json('balconycopings23F')->nullable($value = true);
            $table->json('balconyfloors23F')->nullable($value = true);
            $table->json('balconyglass23F')->nullable($value = true);
            $table->json('porchs')->nullable($value = true);
            $table->json('porchs2')->nullable($value = true);
            $table->json('doma')->nullable($value = true);
            $table->json('doma2')->nullable($value = true);
            $table->json('terasu')->nullable($value = true);
            $table->json('terasu2')->nullable($value = true);
            $table->json('slope')->nullable($value = true);
            $table->json('slope2')->nullable($value = true);
            $table->json('wooddeck')->nullable($value = true);
            $table->json('wooddeck2')->nullable($value = true);
            $table->json('groundduct')->nullable($value = true);
            $table->json('genkantexture')->nullable($value = true);
            $table->json('genkanhandle')->nullable($value = true);
            $table->json('genkantexture2')->nullable($value = true);
            $table->json('genkanhandle2')->nullable($value = true);
            $table->json('hiddenitems')->nullable($value = true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gaibu');
    }
}
