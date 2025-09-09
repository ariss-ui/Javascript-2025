/* 

  Variables

  Las variables son contenedores que almacenan datos. En JS, pueden declarar variables utilizando las palabras clave "var" , "let" ,  "const"

  1. Declaracion e Variables
    var: Es la forma mas antigua de declarar variables. tiene un alcance global o de funcion y puede ser redeclarada y actuañizada.

    let: Introducida en ES6, tiene un alcance de bloqye y puede ser actaualizada pero no redeclararse dentro del mismo alcance.

    const: Tambien se introducida en ES6, tiene un alcance de bloque y no puede ser ni declarada ni redeclarada ni actualizada. Se utiliza para valores que no deben de cambiar.

*/

/* Declaracion con var */

var nombre = "Ariel";
console.log (nombre) // Ariel

nombre = "enojon"

/* Declaracion con let */

let edad = 21;
console.log(edad)

edad = 40; // Actualizacion
console.log(edad)

/* Declaracion con const */

const PI = 3.1416;
console.log(PI)

PI = 6.2832 // ERROR de tipo. No se puede actualizar una constante