<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('robots', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->unique();
            $table->enum('estado', ['activo', 'inactivo', 'mantenimiento'])->default('activo');
            $table->decimal('latitud_marte', 10, 6)->nullable();
            $table->decimal('longitud_marte', 10, 6)->nullable();
            $table->integer('bateria')->default(100); // 0-100
            $table->json('sensores_ir')->nullable(); // {humedad, toxicidad}
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('robots');
    }
};
