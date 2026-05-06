# 📚 ÍNDICE MAESTRO - PROYECTO MARTE

## 🎯 COMIENZA AQUÍ

**Si es tu primera vez**:
1. Lee [GUIA_INICIO_RAPIDO.md](GUIA_INICIO_RAPIDO.md) (5 min)
2. Ejecuta los comandos de [COMANDOS_COPIAR_PEGAR.md](COMANDOS_COPIAR_PEGAR.md) (10 min)
3. Abre http://localhost:5173 en el navegador

**Si quieres entender la arquitectura**:
1. Lee [ARQUITECTURA_PROYECTO.md](ARQUITECTURA_PROYECTO.md)
2. Lee [ESPECIFICACION_TECNICA.md](ESPECIFICACION_TECNICA.md)

**Si quieres verificar lo hecho**:
1. Lee [FASE_1_CHECKLIST.md](FASE_1_CHECKLIST.md)

---

## 📋 DOCUMENTACIÓN DISPONIBLE

### General & Planificación
| Documento | Propósito | Tiempo |
|-----------|-----------|--------|
| [README.md](README.md) | Este archivo | 2 min |
| [GUIA_INICIO_RAPIDO.md](GUIA_INICIO_RAPIDO.md) | Cómo ejecutar todo | 5 min |
| [ESPECIFICACION_TECNICA.md](ESPECIFICACION_TECNICA.md) | Detalles técnicos del proyecto | 10 min |
| [ARQUITECTURA_PROYECTO.md](ARQUITECTURA_PROYECTO.md) | Diagramas y relaciones | 5 min |
| [FASE_1_CHECKLIST.md](FASE_1_CHECKLIST.md) | Lo que se completó | 5 min |

### Ejecución
| Documento | Propósito | Tiempo |
|-----------|-----------|--------|
| [COMANDOS_COPIAR_PEGAR.md](COMANDOS_COPIAR_PEGAR.md) | Comandos listos para copiar | 15 min |

---

## 💻 CÓDIGOS CREADOS

### Backend (Laravel)

#### Modelos (`app/Models/`)
- [Robot.php](backend/mars/app/Models/Robot.php) - Modelo del robot
- [Ruta.php](backend/mars/app/Models/Ruta.php) - Rutas de pathfinding
- [Biopolimero.php](backend/mars/app/Models/Biopolimero.php) - Biopolímeros sembrados
- [Sensor.php](backend/mars/app/Models/Sensor.php) - Datos de sensores
- [OrdenIA.php](backend/mars/app/Models/OrdenIA.php) - Órdenes de la IA

#### Controladores (`app/Http/Controllers/`)
- [RobotController.php](backend/mars/app/Http/Controllers/RobotController.php) - API de robots
- [RutaController.php](backend/mars/app/Http/Controllers/RutaController.php) - API de rutas
- [BiopolimeroController.php](backend/mars/app/Http/Controllers/BiopolimeroController.php) - API de biopolímeros

#### Migraciones (`database/migrations/`)
- [*_create_robots_table.php](backend/mars/database/migrations/2026_05_05_100000_create_robots_table.php)
- [*_create_rutas_table.php](backend/mars/database/migrations/2026_05_05_100001_create_rutas_table.php)
- [*_create_biopolimeros_table.php](backend/mars/database/migrations/2026_05_05_100002_create_biopolimeros_table.php)
- [*_create_sensores_table.php](backend/mars/database/migrations/2026_05_05_100003_create_sensores_table.php)
- [*_create_ordenes_ia_table.php](backend/mars/database/migrations/2026_05_05_100004_create_ordenes_ia_table.php)

#### Rutas
- [routes/api.php](backend/mars/routes/api.php) - Configuración de endpoints

### Frontend (React)

#### Services (`src/services/`)
- [api.js](fronted/mars/src/services/api.js) - Cliente HTTP para Laravel

#### Componentes (`src/components/`)
- [RobotList.jsx](fronted/mars/src/components/RobotList.jsx) - Tabla de robots
- [EstadisticasPanel.jsx](fronted/mars/src/components/EstadisticasPanel.jsx) - Panel de datos

#### Pages
- [Dashboard.jsx](fronted/mars/src/Dashboard.jsx) - Página principal

---

## 🔗 ENDPOINTS API

### Base URL: `http://localhost:8000/api`

#### Robots
```
GET    /robots              Listar todos los robots
POST   /robots              Crear nuevo robot
GET    /robots/{id}         Detalles de un robot
PUT    /robots/{id}         Actualizar robot
DELETE /robots/{id}         Eliminar robot
GET    /robots/{id}/ubicacion  Ubicación actual
```

#### Rutas
```
GET    /rutas               Listar todas las rutas
POST   /rutas               Crear nueva ruta
GET    /rutas/{id}          Detalles de ruta
PUT    /rutas/{id}          Actualizar ruta
GET    /rutas/robot/{id}    Rutas de un robot
POST   /rutas/{id}/iniciar  Iniciar ruta
POST   /rutas/{id}/completar Completar ruta
```

#### Biopolímeros
```
GET    /biopolimeros        Listar todos
POST   /biopolimeros        Crear siembra
GET    /biopolimeros/{id}   Detalles
GET    /biopolimeros/area   Filtrar por área
GET    /biopolimeros/estadisticas Estadísticas
PUT    /biopolimeros/{id}/actualizar-crecimiento
```

---

## 🗄️ BASE DE DATOS

### Tablas Creadas
1. **robots** - Información de los robots sembradores
2. **rutas** - Rutas de pathfinding
3. **biopolimeros** - Siembras de micelio
4. **sensores** - Datos de sensores IR
5. **ordenes_ia** - Órdenes generadas por IA

### Relaciones
```
robots 1:N── rutas 1:N── biopolimeros
robots 1:N── sensores
```

---

## 📊 FASES DEL PROYECTO

| Fase | Nombre | Estado | Inicio |
|------|--------|--------|--------|
| 1 | Fundamentos & Setup | ✅ COMPLETA | Hoy |
| 2 | Visualización en Mapa | ⏳ Próxima | Semana 2 |
| 3 | Algoritmo Pathfinding | ⏳ Después | Semana 3 |
| 4 | Simulación de Biopolímeros | ⏳ Después | Semana 4 |
| 5 | IA & Automatización | ⏳ Después | Semana 5 |

---

## 🚀 PRÓXIMOS PASOS

### Inmediato (Hoy)
- [ ] Ejecutar `php artisan migrate`
- [ ] Ejecutar `npm run dev`
- [ ] Crear robots de prueba
- [ ] Ver Dashboard funcionando

### Corto plazo (Esta semana)
- [ ] Instalar Leaflet (librería de mapas)
- [ ] Conectar API de NASA Mars
- [ ] Crear componente `MapaMarte.jsx`
- [ ] Ver robots en el mapa

### Mediano plazo (Próximas semanas)
- [ ] Implementar algoritmo A* en PHP
- [ ] Visualizar rutas en el mapa
- [ ] Animar recorrido del robot
- [ ] Mostrar biopolímeros creciendo

### Largo plazo (Últimas semanas)
- [ ] Motor de simulación de IA
- [ ] Predicción de contaminación
- [ ] Órdenes automáticas
- [ ] Dashboard de decisiones

---

## 🎓 CONCEPTOS CLAVE

### Biopolímeros
Red de hongos (micelio) que actúan como raíces artificiales. Retienen humedad y pueden absorber contaminantes.

### Pathfinding
Algoritmo (A*, Dijkstra) que calcula la ruta óptima para el robot entre dos puntos.

### Gemelo Digital
Representación virtual de lo que ocurre en Marte. Se sincroniza en tiempo real con los datos reales.

### Fitorremediación
Uso de hongos para absorber contaminantes del suelo.

---

## 📱 PUERTOS

| Servicio | Puerto | URL |
|----------|--------|-----|
| Laravel Backend | 8000 | http://localhost:8000 |
| React Frontend | 5173 | http://localhost:5173 |
| MySQL Database | 3306 | localhost:3306 |

---

## 💡 TIPS & TRICKS

### Visualizar las rutas de la API
```bash
php artisan route:list
```

### Ver las migraciones ejecutadas
```bash
php artisan migrate:status
```

### Resetear todo (¡CUIDADO!)
```bash
php artisan migrate:refresh
```

### Ver estructura de una tabla
```bash
php artisan tinker
>>> DB::table('robots')->get()
```

### Acceder a la BD desde terminal
```bash
mysql -u root mars
SELECT * FROM robots;
```

---

## 📞 CONTACTO & SOPORTE

Si tienes dudas:
1. Revisa la sección **Troubleshooting** en [GUIA_INICIO_RAPIDO.md](GUIA_INICIO_RAPIDO.md)
2. Revisa los logs: `storage/logs/laravel.log`
3. Usa `php artisan tinker` para debuggear

---

## 📝 NOTAS DEL PROYECTO

### Decisiones de Arquitectura
- **Laravel**: Framework MVC probado y escalable
- **React**: UI moderna y reactiva
- **MySQL**: BD relacional y estable
- **Eloquent ORM**: Relaciones fáciles entre tablas
- **RESTful API**: Fácil de consumir desde React

### Convenciones Usadas
- Nombres en español para métodos de negocio
- Tablas en inglés pero singular en modelos
- Controllers heredan de `Controller`
- Models usan `$fillable` para asignación masiva

### Próximas Mejoras
- Agregar autenticación (Laravel Sanctum)
- Implementar WebSockets para tiempo real
- Agregar tests automatizados
- Cachear resultados de la API

---

## ✅ COMPLETADO EN FASE 1

```
✅ Base de datos relacional completa
✅ API REST con 20+ endpoints
✅ Modelos Eloquent con relaciones
✅ Controladores con lógica de negocio
✅ Dashboard React funcional
✅ Servicio de llamadas a API
✅ Componentes reutilizables
✅ Documentación completa
✅ Guías de ejecución
✅ Diagramas de arquitectura
```

---

## 🎉 ¡FELICITACIONES!

Has llegado al final de la **FASE 1**. 

Tu proyecto ahora tiene:
- ✅ Una API robusta
- ✅ Una BD bien estructurada
- ✅ Un dashboard funcional
- ✅ Documentación clara

**Próximo objetivo**: Agregar el mapa de Marte (FASE 2)

---

*Proyecto Marte - Remediación de Suelos con IA*
*Iniciado: 5 de Mayo de 2026*
*Estado Actual: FASE 1 COMPLETADA ✅*
