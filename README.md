# Proyecto CI - JetPIC L12

Este proyecto ha sido creado por Guillermo Vidal y Esther Vendrell

#### Estructura del codigo

Dividimos nuestro proyecto en diferentes ficheros:
1. main.c
   - Llamamos a las funciones necesarias para la inicialización del programa.
   - Printamos por linea serie una pantalla principal en la que aparecen nuestros nombres. 
   - En el while de nuestro main llamamos constantemente a la funcion `movePlayer()` del archivo player.h (explicada posteriormente). De esta manera estaremos comprobando constantemente si se produce algun movimiento en nuestro jugador.
2. initial.h
   - Inicializamos todos los datos necesarios para la realización del proyecto.
   - Tenemos la función `inicialize()` donde inicializamos la pantalla y printamos por pantalla los dibujos (del archivo splash.h).
3. config.h
4. player.h
   - Tenemos la funcion `movePlayer()` la qual tiene en cuenta el movimiento de nuestro jugador, tanto si es por Línea serie como si es por botones.
5. enemies.h
   - Estan las diferentes funciones para mover a los enemigos de los diversos niveles de dificultad. 
6. splash.h
   - Caracteres en bitmap.
   - Función para printar los carácteres de bitmap.
7. GLCD.h
8. ascii.h

#### Problemes trobats

Durante la realización del proyecto hemos tenido varios problemas ya que ha implicado juntar todos nuestros conocimientos. El problema más destacables ha sido:
   - Los enemigos se movian demasiado rápido.
---
**NOTE**

It works with almost all markdown flavours (the below blank line matters).

---

[^note]:
    Uno de nuestros requisitos ha sido no usar delays para solventar este inconveniente.

#### Solucions implementades

La solución al problema descrito anteriormente ha sido añadir un contador que cada X numero de tics hiciera un movimiento.

#### Niveles de nuestro proyecto

**Level 1:** 
2. initial.h
3. Level
