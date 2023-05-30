# Ideas de la segunda actividad

## Enunciado

* Desarrollar un formulario con un cuadro de edición para escribir una palabra.
* El servidor recibirá la palabra y la devolverá al revés. Se utilizará un loop para construir el string inverso.
* Mostrar en pantalla bajo el formulario la palabra revertida recibida desde el servidor.

## Backend

En la función que devuelve la cadena al revés:

1. Creamos una cadena vacía.
1. El bucle podría ser algo como `for (caracter in cadena)` para no liarnos con los índices.
1. Dentro del bucle yo probaría a hacer que la cadena sea el caracter y la cadena con el operador spread (el de los puntos suspensivos).
