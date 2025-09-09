/* 


  Tipos de Datos

  Los tipos de datos son una calsificacion de los diferentes valores que podemos manejar en un lenguaje de programacion.

  En JS existen varios tipos que se pieden agrupar en dos categrias principales: primitivos y complejos u objetos.

  Cada tipo de dato tiene sus propias caracteristias y usos especificos en la programacion.

  1. Primitivos
    Datos basicos que no se consideran "objetos" y no tiene "metodos"

      Number o numero
        Representan valores numericos ya sea enteros o decimales (punto flotante)

      Strings o Cadena de caracteres
        Representan texto. El texto se coloca entre comillas dobles o simples "" o '' Se valen las dos, pero hay que ser consistentes
      
      Boolean o Booleanos
        Representan un valor logico que puede ser 'true' o 'false'

      Undefined o Indefinido
        Es el valor que se asigna a un avariable que ha sido decalrada pero no inicializada.

      Null o Nulo
        Representa la ausencia intencional de cualquier valor u objeto. Es un tipo de dato que indica que una variable no tienen ningun valor asignado.


*/

/* Numbers */

let miNumero = 5; // Enteros
let miNumeroDecimal = 8.8; // Decimales

console.log(miNumero) ;
console.log(miNumeroDecimal) ;

/* Strings */

let miNombre = 'Ariel' ;
let miApellido = 'Aguilar' ;

console.log(miNombre) ;
console.log(miApellido) ;

/* Boolean */

let esEstudiante = true ;
let tieneTrabajo = false ;

console.log(esEstudiante) ;
console.log(tieneTrabajo) ;

/* Undefined */

let aprobareDesarrolloApps ; // Inicializar una variable
console.log(aprobareDesarrolloApps) ;

/* Null */

let  meQuiere = null ;
console.log(meQuiere) ;

/*

  2. Complejos o de Objetos

  Array o Arreglo
    Es un conjunto de datos que se almacenan en una lista ordenada de elementos. Los datos dentro de los arreglos se describen entre corchetes [] y separados por comas ,

  Object u Objeto
    Es un conjunto de multiples datos en pares 'clave' - 'valor' . Se escriben entre llaves {} y separados por comas ,

  Functions o Funciones
    Es un tipo de dato que puede ser "inovocado", Se declaran con la palabra reservada "function" y el codigo que se ejecuta va entre {"codigo"}

*/

/* Array */

let misSeries = ['How I Met Your Mother' , 'De Brutas Nada' , '40 y 20'] ;
let misNumeros = [ 6 , 2 , 2004 ] ;

let tutiFruti = ['Puchunguito' , 132 , true] ;

console.log(misSeries[0] ) ; // How I Met Your Mother
console.log(misNumeros[2]) ; // 2004
console.log(tutiFruti[1] ) ; // 132

/* Object */

let perro = {
  nombre : 'Firulais',
  edad: 5,
  color: "blanco",
  ladra: true,
  muerde: false,
}

console.log( perro.nombre) ;
console.log( perro.edad) ;
console.log( perro.color) ;
console.log( perro.ladra) ;
console.log( perro.muerde) ;

/* Functions */

function saludar() {
  // Codigo a ejecutar
  console.log ('Hola mamá, Estoy aprendiendo JS') ;
}

// Llamamos a la Funcion
saludar();