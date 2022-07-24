<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockoperationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_operations', function (Blueprint $table) {
            $table->id();
            $table->double('quantity');
            $table->foreignId('lote_id')->constrained();
            $table->string('tag');
            $table->dateTime('deleted_at')->nullable();
            $table->foreignId('sold_by')->nullable()->constrained('users');
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
        Schema::dropIfExists('stock_operations');
    }
}
