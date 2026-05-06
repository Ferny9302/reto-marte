<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Robot extends Model
{
    protected $fillable = [
        'nombre',
        'estado',
        'latitud_marte',
        'longitud_marte',
        'bateria',
        'sensores_ir',
    ];

    protected $casts = [
        'sensores_ir' => 'array',
    ];

    public function rutas(): HasMany
    {
        return $this->hasMany(Ruta::class);
    }

    public function sensores(): HasMany
    {
        return $this->hasMany(Sensor::class);
    }

    /**
     * Obtener la última posición conocida del robot
     */
    public function ultimaPosicion(): array
    {
        return [
            'latitud' => $this->latitud_marte,
            'longitud' => $this->longitud_marte,
        ];
    }
}
