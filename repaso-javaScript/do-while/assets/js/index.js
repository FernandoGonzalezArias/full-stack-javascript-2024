//------------------------------------------------------------------------------------------------------
console.log("----------------Ejemplo básico de un bucle do-while-------------------");

// Declaramos una variable llamada 'i' y la inicializamos en 0
let i = 0;

// Usamos un bucle do-while para repetir un bloque de código mientras la condición (i < 5) sea verdadera
do {
  // Imprimimos el valor de 'i' en la consola
  console.log("El valor de i es: " + i);
  // Incrementamos 'i' en 1
  i++;
} while (i < 5); // La condición se evalúa después de cada iteración

//------------------------------------------------------------------------------------------------------
console.log("----------------Ejemplo de un bucle do-while que recorre un array-------------------");

// Declaramos un array llamado 'frutas' con algunos elementos
let frutas = ["manzana", "banana", "cereza", "durazno"];

// Declaramos una variable 'j' y la inicializamos en 0
let j = 0;

// Usamos un bucle do-while para recorrer todos los elementos del array
do {
  // Imprimimos el elemento actual del array en la consola
  console.log("Fruta: " + frutas[j]);
  // Incrementamos 'j' en 1
  j++;
} while (j < frutas.length); // La condición se evalúa después de cada iteración

//------------------------------------------------------------------------------------------------------
console.log("----------------Ejemplo de un bucle do-while con una condición compleja-------------------");

// Declaramos una variable llamada 'num' y la inicializamos con un valor de 1
let num = 1;

// Usamos un bucle do-while para repetir un bloque de código mientras la condición (num <= 100) sea verdadera
// En este caso, queremos imprimir solo los números impares del 1 al 100
do {
  // Usamos una sentencia if para comprobar si 'num' es impar
  if (num % 2 !== 0) {
    // Si 'num' es impar, lo imprimimos en la consola
    console.log("Número impar: " + num);
  }
  // Incrementamos 'num' en 1
  num++;
} while (num <= 100); // La condición se evalúa después de cada iteración

//------------------------------------------------------------------------------------------------------
console.log("----------------Ejemplo de un bucle do-while que usa la palabra clave 'break'-------------------");

// Declaramos una variable llamada 'k' y la inicializamos en 0
let k = 0;

// Usamos un bucle do-while para repetir un bloque de código mientras la condición (k < 10) sea verdadera
do {
  // Si 'k' es igual a 5, salimos del bucle con 'break'
  if (k === 5) {
    break;
  }
  // Imprimimos el valor de 'k' en la consola
  console.log("El valor de k es: " + k);
  // Incrementamos 'k' en 1
  k++;
} while (k < 10); // La condición se evalúa después de cada iteración

//------------------------------------------------------------------------------------------------------
console.log("----------------Ejemplo de un bucle do-while que usa la palabra clave 'continue'-------------------");

// Declaramos una variable llamada 'm' y la inicializamos en 0
let m = 0;

// Usamos un bucle do-while para repetir un bloque de código mientras la condición (m < 10) sea verdadera
do {
  // Incrementamos 'm' en 1 al principio del bucle
  m++;
  // Si 'm' es un número par, saltamos a la siguiente iteración con 'continue'
  if (m % 2 === 0) {
    continue;
  }
  // Imprimimos el valor de 'm' en la consola
  console.log("Número impar: " + m);
} while (m < 10); // La condición se evalúa después de cada iteración

//------------------------------------------------------------------------------------------------------