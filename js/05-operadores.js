/* 

  Operadores

    Son simbolos que indican al interprete que debe realizarse una operacion matematica, logica o relacional y producir un resultado.

    1. Operaciones aritmeticas
      Se utilizan operaciones matematicas basicas como la suma, resta, division y multiplicacion.

      + 👉 suma
      - 👉 resta
      * 👉 multiplicador
      / 👉 dividir
      % 👉 modulo (residuo de una division)
      ++ 👉 incremento (suma 1 al valor)
      -- 👉 decremento (resta 1 al valor)

*/

let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
a++;
console.log(a++); // 11
b--;
console.log(b); // 4

/* 

  Operadores de asignacion

  Estos operadores utilizan para asignar las variables
    =👉 asignacion
    += 👉 suma y asigna
    -= 👉 resta y asigna
    *= 👉 multiplica y asigna
    /= 👉 divide y asigna
    %= 👉 modulo y asigna


*/

let c = 20;
c += 5; // 25
console.log(c) // 20

c -= 10; // 15
c *= 12; // 30
c /= 3; // 10
c %= 3; // 1

console.log(c)

/* 

  Operadores de comparacion

  Estos operadores se utilizan para comparar los valores y devolver un valor booleano (true o false)
    == 👉 igualdad (compara solo el valor)
    === 👉 igualdad escrita (compara el valor y compara el tipo)
    != 👉 desigualdad (compara solo el valor)
    !== 👉 desigualdad escrita (compara el tipo)
    > 👉 mayor que
    < 👉 menor que
    >= 👉 mayor o igual que
    <= 👉 menor o igual que

  a
*/

let d = 10; // number - numero
let e = "10"; //string - cadena de caracteres

d == e; // true

console.log(d == e); // true
console.log(d === e); // false como tu amor
console.log(d != e); // false
console.log(d !== e); // true
console.log(d > 5); // true
console.log(d < 15) // true
console.log(d >= 10) //true
console.log(d <= 5) // false

/* 

  Operadores Logicos

  Se utilizan para combinar expresiones booleanas.
    && 👉 (y) - si ambos valores son verdadero el resultado es verdadero. Si al menos un valor es falso. el resultado es falso.

    || 👉 OR (o) - Si al menos un valor es verdadero, el resultado es verdadero. Solo si ambos valores son falsos., el resultado es falso.

    ! 👉 NOT (no) - Niega el valor. El resultado es el valor contrario al que se esta negando.


*/

let f = true;
let g = false;

f && g; // false

console.log(f && g); // false
console.log(f || g); // true
console.log (!f); // false
console.log(!g); // true