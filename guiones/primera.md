# Cuestiones específicas de la primera actividad

## Enunciado

* Desarrollar un formulario con un cuadro de edición para escribir el importe.
* El servidor recibirá la información y devolverá un objeto con la siguiente información:
  * Descuento: Si el importe supera 1000 será el importe por el 20%. Si no el importe por el 10%.
  * Bruto: Importe + Descuento.
  * IVA: Bruto * 21%
  * Neto: Bruto + IVA.
* Mostrar en pantalla bajo el formulario la información recibida

## Formulario del frontend

El input de tipo number puede tener las siguientes características:

* min: 0.01 (un céntimo).
* step: 0.01 (el incremento sería de un céntimo).
* autocomplete: transaction-amount (por si ayuda al usuario a escribir el importe).
