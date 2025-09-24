/* 

  Son estructuras de control que permiten ejecutar diferentes bloques de codigo segun una condicion (si la condicion es verdadera o falsa)
    1. if
      Evalua una condicion y si es verdadera. ejecuta el bloque de codigo dentro de sus llaves

      Sintaxis
        if (condicion) {
          //bloque o codigo que se ejecuta
        }


*/

let edad = 13;
if (edad >= 18) {
  // Codigo que se ejecuta
  alert("Eres mayor de edad, date! 😈")
}

/* 

  2. else
    Permite ejecutar un bloque de codigo si la condicion es falsa.
  
  Sintaxis
    if (condicion){
      // codig que se ejecuta si la condicion es verdadera
    } else {
      // codigo que se ejecuta si la condicion es falsa
    }


*/

let hora = 16;

if (hora < 12) {
  console.log("Buenos dias solecito");
} else {
  console.log("Buenas tardes mi atardecer");
}

/* 

  3, else if
    Nos va a permitir tener mas de una condicion a ser evaluada, esta evaluacion es en secuencia. si una condicion es verdadera se ejecuta su bloque de codigo.

      Sintaxis
        if (condicion) {
          // cdigo que se ejecuta si es verdadera la condicion
        } else if (condicion) {
          // se ejecuta si la anterior es falsa y esta condicion es verdadera
        } else {
          // codigo que se ejecuta si ninguna de las anteriores es verdadera.  
        }

*/

let calificacion = 1;
if (calificacion >= 9) {
  console.log("Es un excelente Programador!!!")
} else if (calificacion >= 7) {
  console.log("Ahi la llevas caon, aguas!!!")
} else if (calificacion >= 5) {
  console.log("Ponte pilas mi master o nos vemos en extra!!!")
} else {
  console.log("Ya valio barriga señor verga, bienvenido al extra!!!")
}