# 🚀 Proyecto Mars Matrix: Guía Completa Explicada Paso a Paso

Hola equipo 👋. Esta guía está escrita para que **cualquier persona del equipo** pueda entender exactamente de qué trata nuestra plataforma web, qué problemas resuelve y cómo funciona por dentro. 

La idea es que con leer este documento, estén 100% listos para presentar el proyecto a los jueces y responder cualquier pregunta, ¡incluso si no escribieron el código!

---

## 🌎 1. ¿Cuál es nuestro proyecto? (El Resumen Rápido)
El reto nos pedía diseñar un sistema para restaurar suelos contaminados o áridos usando un robot oruga que siembra biopolímeros (como si fueran "raíces falsas" hechas de hongos/micelio).

**Nuestra solución tiene dos partes:**
1. **La parte Física (Hardware):** El robotcito físico que tiene sensores, un extrusor para plantar el micelio y llantas de oruga.
2. **La parte de Software (Esta plataforma):** Un **"Gemelo Digital"**. Es decir, una réplica virtual y en vivo de lo que está haciendo el enjambre de robots físicos allá afuera. A través de esta página web, los astronautas o los controladores en la Tierra pueden monitorear el suelo, ver por dónde andan los robots, y usar Inteligencia Artificial para mandarlos a limpiar de forma automática.

Nosotros hicimos la plataforma web (**El Gemelo Digital**).

---

## 🪞 2. El "Modo Espejo" (Marte vs Tierra)
El reto pedía que el robot sirva tanto para Marte como para la Tierra (Chihuahua). En nuestra página web van a ver que hay dos botones arriba del mapa: **Marte** y **Chihuahua**.

*   **En Chihuahua:** El objetivo de los biopolímeros es absorber metales pesados (fitorremediación) de zonas contaminadas.
*   **En Marte (Cráter Jezero):** El objetivo es que los biopolímeros retengan la poquita humedad que hay.
*   **¿Cómo funciona?:** El código sabe exactamente en qué planeta estás basado en las **coordenadas de GPS**. La programación se asegura de que los robots de Chihuahua no aparezcan mágicamente en Marte y viceversa. Todo está aislado y ordenado.

---

## 🧩 3. Partes Principales de la Pantalla (El Dashboard)
Cuando abran la página, verán un panel de control negro muy moderno con detalles naranjas y verdes. Aquí está lo que hace cada cosa:

### A. El Mapa Interactivo
Es el centro de todo. Es un mapa satelital real. Aquí van a ver **3 cosas importantes**:
1.  **Íconos de Robots:** Representan a nuestras "orugas". Tienen forma de rover espacial y están coloreados.
2.  **Círculos Rojos Pulsantes (Zonas Tóxicas):** Son áreas del mapa que el sistema detecta que están altamente contaminadas (ej. con arsénico).
3.  **Líneas de colores (Rutas):** Son los caminos por donde ya pasó o va a pasar el robot. ¡Tienen el mismo color que el robot para que sepas de quién es cada camino!

### B. Los Puntos Verdes y la "Red Biológica"
Cuando un robot avanza, va dejando puntos verdes en el mapa. ¡Esos son los **biopolímeros** (las semillas de hongo)! 
**¿El detalle increíble?:** Programamos el sistema para que, si dos de estos puntos verdes se plantan cerca el uno del otro, **se conecten automáticamente con una línea verde brillante**. Esto simula visualmente cómo las raíces del hongo (el micelio) crecen bajo tierra y se entrelazan creando una gran red de vida.

---

## 🧠 4. ¿Cómo funciona la Inteligencia Artificial? (El "Botón Mágico")

Este es el punto más fuerte de nuestra plataforma. Imaginen que hay un derrame tóxico; no tenemos tiempo de dibujar la ruta a mano para que el robot vaya a limpiar. 

Por eso creamos el botón verde brillante que dice **"Activar IA Remediación"** (en la parte superior de la pantalla). Cuando presionas ese botón, la computadora hace lo siguiente en una fracción de segundo:

1.  **Escaneo:** El servidor (Backend) revisa todo el mapa buscando Zonas Tóxicas (círculos rojos) que no hayan sido limpiadas.
2.  **Asignación de Enjambre:** Busca qué robots nuestros están "libres" y cerca de ahí.
3.  **Creación de Ruta:** Le asigna la zona al robot y **dibuja una ruta de forma completamente automática**.

---

## 🔀 5. El Algoritmo de "Pathfinding" (El patrón en Zig-Zag)
Una vez que presionan el botón de la IA, fíjense bien en la forma de la ruta que se dibuja automáticamente sobre la zona tóxica. ¡Tiene forma de **Zig-Zag**!

¿Por qué es un Zig-Zag y no una línea recta?
Porque el reto nos pide que el robot limpie o siembre un área completa. Si el robot solo cruzara la zona tóxica en línea recta, dejaría el 90% del área contaminada. Al usar matemáticas para calcular un **patrón de Zig-Zag (algoritmo de cobertura)**, obligamos al robot a "barrer" toda la zona de lado a lado (como cuando cortas el pasto o como una impresora 3D rellenando una pieza) asegurando que el 100% de la contaminación sea neutralizada por los biopolímeros.

---

## 🎬 6. ¿Cómo hacer la demostración frente a los jueces? (Paso a Paso)

Cuando estén exponiendo, sigan exactamente este guion visual para impresionar:

1.  **Muestren el Dashboard:** Expliquen que es el Gemelo Digital centralizado.
2.  **Cambien al Mapa de Chihuahua:** Denle clic al botón "Chihuahua" arriba del mapa.
3.  **Señalen la Zona Tóxica:** Digan *"Aquí los sensores satelitales acaban de detectar una zona de alta toxicidad (el círculo rojo)"*.
4.  **Activen la IA:** Denle clic al botón **Activar IA Remediación**. Digan: *"En lugar de hacerlo a mano, nuestra IA escanea el terreno, toma control del robot más cercano y diseña el patrón de limpieza"*. (Cierren la ventanita de alerta que sale).
5.  **Apunten el Zig-Zag:** Muestren cómo en el mapa se dibujó la ruta en zigzag solita.
6.  **Inicien la Simulación:** Denle clic al botón **"Iniciar simulación"** (aparece arribita del mapa). Van a ver cómo el ícono del robot **se empieza a mover** recorriendo todo el zig-zag. Digan: *"Esto es lo que verían los controladores en vivo mientras el robot físico planta la red de vida"*.
7.  **Muestren el Micelio:** Hagan un poco de zoom para mostrar cómo los biopolímeros (puntos verdes) plantados están todos interconectados con las rayitas brillantes, formando la red neuronal bajo tierra.

---

## ⚙️ 7. Preguntas Técnicas que les pueden hacer los jueces (y cómo responderlas)

**Pregunta 1: ¿Con qué lenguaje o tecnología está hecho esto?**
> *Respuesta:* El "Frontend" (lo que ven en la pantalla) está hecho con **React y Leaflet** (para el mapa satelital). El "Backend" (el cerebro y la base de datos) está hecho con **Laravel y PHP**. Usamos una arquitectura de API REST, lo que significa que el robot físico solo necesita conectarse a nuestro servidor por internet para saber a dónde ir.

**Pregunta 2: ¿Cómo sabe el robot por dónde ir en el Zig-Zag?**
> *Respuesta:* En nuestro servidor en Laravel implementamos un servicio de `Pathfinding`. El algoritmo detecta las esquinas del radio del círculo tóxico, calcula la distancia que abarca el extrusor del robot, y traza coordenadas de barrido matemático que luego le mandamos al robot físico.

**Pregunta 3: ¿Qué es exactamente el "Gemelo Digital"?**
> *Respuesta:* Es tener una réplica virtual exacta del terreno. Lo que pasa en la vida real con nuestros sensores de contaminación, nosotros lo proyectamos en tiempo real en esta pantalla web. Si el robot tira un biopolímero en la tierra de Chihuahua, instantáneamente aparece un puntito verde en nuestra plataforma en Chihuahua.

---
*¡Confíen en ustedes! Tienen una plataforma técnica súper avanzada, con inteligencia artificial autónoma, mapeo satelital y algoritmos de cobertura. Relájense, sigan el guion de la demostración y asegúrense de explicar todo con mucha seguridad.* 🚀
