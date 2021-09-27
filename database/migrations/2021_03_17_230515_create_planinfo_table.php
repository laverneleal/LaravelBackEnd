<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaninfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Schema::connection('master')->create('planinfo', function (Blueprint $table){ //jazz
        Schema::create('planinfo', function (Blueprint $table) {
            $table->id();
            $table->string('unique_id');
            $table->unique('unique_id');
            $table->string('construction_code', 12);
            $table->string('plan_no', 5);
            $table->string('shio_no', 5);
            $table->string('house_type', 30);
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
        Schema::dropIfExists('planinfo');
    }
}
