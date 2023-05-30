# Ideas de la tercera actividad

## Tercera

* Crear el siguiente entorno visual:
  * Crear dos cuadros de texto con un botón al lado de cada uno.
  * Los botones tendrán como etiqueta “Buscar por nombre” y “Filtrar por población” respectivamente.
  * No se hará como formulario. Los eventos click de cada botón enviarán al servidor el valor del input correspondiente.
* En el servidor:
  * Crear un array de 10 personas. Cada persona tendrá un nombre y una población.
  * Se recibirán las peticiones de los botones en dos rutas diferentes
  * Buscar por nombre recibirá el nombre, buscará en el array la persona con ese nombre y lo devolverá. Si no lo encuentra, devolverá un 404.
  * Filtrar por población recibirá la población, filtrará del array aquellas personas de esa población y las devolverá.
* Finalmente, se mostrarán bajo los cuadros de texto y los botones los resultados devueltos por el servidor.

## Frontend

Recordar que aunque los cuadros de edición no estén en un formulario se manejan igual cambiando el valor del useState correspondiente como está en el componente del círculo del contador2.

## Backend

Ya que vamos a hacer el array a mano como en el ejemplo deberíamos poner diez nombres de personas diferentes. Así se podría buscar por nombre con el método find y a las poblaciones con el método filter.
