/* 

  Arreglos 

  Un arreglo es un acolección de datos, es decir , un lista de elementos. 

  En JS los arreglos se definen utilizando los corchetes [] y los elementos internos se se´paran por comas. 

  Pueden contener el mismo tipo de dato o de diferentes tipos, incluso pueden contener arreglos anidados. 

  */

let frutas = ["manzana", "sandia", "piña", "pera", "kiwi"];
let calificaciones = [10, 8, 4, 10];
let misDatos = ["Sherry", 19, true];
let coordenadas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(frutas);
console.log(calificaciones);
console.log(misDatos);
console.log(coordenadas);

/* 
 Lengtht -> Nos indica la cantidad de elementos que tenemos dentro del arreglo.
 
  Para acceder a los elementos de un arrglo utilizamos su indice. Los arreglos siempre comiezan por el índice 0.

*/

console.log(frutas.length); // Cantidad de datos.
console.log(calificaciones.length);
console.log(misDatos.length);
console.log(coordenadas.length);

/* 
  Indice -> Nos indica la "posición" de elemento dentro del arreglo para acceder a los elementos fr un arreglo utilizamos un indice . Los arreglos siempre comienzan con el indice 0 y se coloca el  valor en corchetes []

*/

console.log(" Mi fruta favorita es: " + frutas[1] + "🍉");
console.log(" con Limón saque " + calificaciones[2] + " de calificación ");
console.log(" Mi nombre es " + misDatos[0] + " y tengo " + misDatos[1] + " años ");
console.log(" Me llamo " + misDatos[0] + " y tengo " + misDatos[1] + " años ");
console.log("El siguiente dato esta en un arreglo anidado: " + coordenadas[1][2]);


/*  

  Métodos de los arreglos:

  push() -> Agrega uno o más elementos al final del arreglo 
  pop() -> Elimina el ultimo elemento del arreglo y lo devuelve
  shift() -> Elimina el primer elemento del arreglo y lo devuelve
  unshift() -> Agrega uno o más elementos al inicio del arreglo
  indexOf () -> Devuelve el índice del primer elemento que coincida con el valor especificado  o regresa -1 si no encuentra nanais.

*/

console.log(frutas.length); // 5

frutas.push(" uvas ", " papaya ");

console.log(frutas.length); // 7

let ultimaFruta = frutas.pop();

console.log(frutas.length); // 6
console.log(ultimaFruta); // papaya

let primeraFruta = frutas.shift();

console.log(frutas.length); // 5
console.log(primeraFruta); // Manzana

frutas.unshift(" maracuyá ", " fresa ", " mango ");

console.log(frutas.length); // 8
frutas.push(" mango ")

console.log(frutas)

let indiceFruta = frutas.indexOf(" mango ");

console.log(indiceFruta)


/* 

  Iteración sobre arrays

  Tomamos una lista de datos y accedemos a sus datos, a través de un bucle

*/

frutas.unshift(" pitajaya ", " caguama ")

for (i = 0; i < frutas.length; i++) {
  console.log("se me antojo una" + frutas[i]);
}
