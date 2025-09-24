/* 

  Concatenacion de cadenas de texto

  Proceso de unir dos o mas cadenas de text en una sola. 
  
  Esto se hace utilizando en operador + o las plantillas literales (template strings) se usan con bacticks `` [ALT GR + tecla } ] (acento invertido o acento agudo)


*/

let miNombre = "Ariel";
let miApellido = "Aguilar";

// Usando el operador + 
let nombreCompleto = miNombre + " " + miApellido;

console.log(nombreCompleto);

// Usando las plantillas literales
let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${18+3}`;

console.log(nombreNuevo);

/* 

  Si se utiliza el operado + con valores numericos, se suman pero si se usa con cadenas de caracter, se concatenan


*/

let resultado = 5 + 10;
console.log(resultado); // 15

let resultadoDos = "5" + 10;
console.log(resultadoDos); // 510 