# ISFT 177 - AyED3

## Práctica Nº 2 - Formulario

Dado el formulario a continuación:

![Exercise example](blob:https://docs.google.com/fe972f2e-7923-463d-85d1-67b2688804f0)

El usuario debe ingresar el nombre de la tarea en el cuadro de texto. Al hacer clic en el botón __Agregar__, se debe generar (programáticamente) un elemento de lista (<li>), e insertarse en la lista no ordenada (<ul>)presente en la página.

Generar un documento HTML vacío (es decir, con la estructura completa, pero con el <body> vacío) y luego, desarrollar un programa en Javascript que utilizando los métodos y propiedades proporcionados por el DOM (createElement, getElementById, setAttribute, etc) genere el formulario pedido.

Algunas aclaraciones respecto del citado formulario:

 - El campo __Edad__ debe ser de tipo numérico, es decir que sólo permita números, y éstos además deben ser mayores o iguales a dieciocho (18).
 - El campo __Ciudad__ es una lista desplegable (<select> o _combo box_) que debe permitir seleccionar los ítems _Libertad, Parque San Martín_ o _Merlo Centro_.
 - El botón __Enviar__ también se crea como un elemento <input> (como cualquier elemento de formulario) cuyo tipo es _submit_.

Recordá que el cuerpo de la página HTML debe estar vacío y que todo su contenido deberá generarse usando Javascript.
