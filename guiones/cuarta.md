# Ideas de la cuarta actividad

## Enunciado

* Desarrollar el siguiente entorno visual. (No hacer formulario alguno):
  * Incluir un cuadro de texto para introducir números. Aquí introduciremos un saldo inicial.
  * Incluir un botón “Jugar partida contra el servidor”
  * Al pulsar el botón, el componente React calculará un número aleatorio entre 1 y 100 y pedirá al servidor un número entre las mismas cantidades.
  * El servidor devolverá el número.
* Cuando el componente lo reciba, mostrará al usuario si se ha ganado, perdido o empatado. (Por ejemplo, el usuario gana si el número devuelto por el servidor es inferior al número generado por el componente)
* Si el usuario gana, se incrementará en 10 el saldo y si pierde se bajará en 10.

## Ambos

La fórmula para el número aleatorio entre 1 y 100 es:

```Typescript
const entreUnoyCien = Math.floor(Math.random() * 100 + 1)
```

Esto es porque el número puede ser 0 pero nunca podrá ser 1.
