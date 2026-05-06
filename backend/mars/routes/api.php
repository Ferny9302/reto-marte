<?php

use App\Http\Controllers\RobotController;
use App\Http\Controllers\RutaController;
use App\Http\Controllers\BiopolimeroController;
use Illuminate\Support\Facades\Route;

/**
 * API de Robots
 * CRUD completo para gestionar los robots sembradores
 */
Route::apiResource('robots', RobotController::class);
Route::get('/robots/{robot}/ubicacion', [RobotController::class, 'ubicacion']);

/**
 * API de Rutas
 * Gestionar rutas de pathfinding
 */
// Endpoint específico para generación de rutas (evita colisiones con routes dinámicas)
Route::post('/rutas/generate', [RutaController::class, 'generate']);
Route::apiResource('rutas', RutaController::class);
Route::get('/rutas/robot/{robot}', [RutaController::class, 'porRobot']);
Route::post('/rutas/{ruta}/iniciar', [RutaController::class, 'iniciar']);
Route::post('/rutas/{ruta}/completar', [RutaController::class, 'completar']);

/**
 * API de IA y Zonas Tóxicas
 */
use App\Http\Controllers\IAController;
Route::get('/zonas-toxicas', [IAController::class, 'getZonasToxicas']);
Route::post('/ia/remediar', [IAController::class, 'remediar']);

/**
 * API de Biopolímeros
 * Gestionar siembras y monitoreo de crecimiento
 */
Route::get('/biopolimeros/area', [BiopolimeroController::class, 'porArea']);
Route::get('/biopolimeros/estadisticas', [BiopolimeroController::class, 'estadisticas']);
Route::put('/biopolimeros/{biopolimero}/actualizar-crecimiento', [BiopolimeroController::class, 'actualizarCrecimiento']);
Route::apiResource('biopolimeros', BiopolimeroController::class);

/**
 * Health Check
 */
Route::get('/health', function () {
    return response()->json(['status' => 'ok', 'timestamp' => now()]);
});