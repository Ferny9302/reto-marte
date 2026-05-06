<?php

namespace App\Http\Controllers;

use App\Models\Robot;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class RobotController extends Controller
{
    /**
     * GET /api/robots - Listar todos los robots
     */
    public function index(): JsonResponse
    {
        $robots = Robot::with('rutas', 'sensores')->get();
        return response()->json($robots);
    }

    /**
     * POST /api/robots - Crear nuevo robot
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nombre' => 'required|string|unique:robots',
            'latitud_marte' => 'required|numeric|between:-90,90',
            'longitud_marte' => 'required|numeric|between:-180,180',
            'estado' => 'required|in:activo,inactivo,mantenimiento',
        ]);

        $robot = Robot::create($validated);
        return response()->json($robot, 201);
    }

    /**
     * GET /api/robots/{id} - Obtener detalles de un robot
     */
    public function show(Robot $robot): JsonResponse
    {
        $robot->load('rutas', 'sensores');
        return response()->json($robot);
    }

    /**
     * PUT /api/robots/{id} - Actualizar posición/estado del robot
     */
    public function update(Request $request, Robot $robot): JsonResponse
    {
        $validated = $request->validate([
            'nombre' => [
                'nullable',
                'string',
                Rule::unique('robots', 'nombre')->ignore($robot->id),
            ],
            'latitud_marte' => 'nullable|numeric|between:-90,90',
            'longitud_marte' => 'nullable|numeric|between:-180,180',
            'bateria' => 'nullable|integer|between:0,100',
            'estado' => 'nullable|in:activo,inactivo,mantenimiento',
            'sensores_ir' => 'nullable|array',
        ]);

        $robot->update($validated);
        return response()->json($robot);
    }

    /**
     * DELETE /api/robots/{id} - Eliminar robot
     */
    public function destroy(Robot $robot): JsonResponse
    {
        $robot->delete();
        return response()->json(['message' => 'Robot eliminado']);
    }

    /**
     * GET /api/robots/{id}/ubicacion - Obtener ubicación actual
     */
    public function ubicacion(Robot $robot): JsonResponse
    {
        return response()->json([
            'robot_id' => $robot->id,
            'nombre' => $robot->nombre,
            'latitud' => $robot->latitud_marte,
            'longitud' => $robot->longitud_marte,
            'bateria' => $robot->bateria,
            'timestamp' => $robot->updated_at,
        ]);
    }
}
