//-------------------------------------------------------------------------------------------------------------
console.log("-------------Ejemplo básico de if-else-----------");

// Declaramos una variable llamada 'edad' y la inicializamos con un valor de 18
let edad = 18;

// Usamos una sentencia if para comprobar si la variable 'edad' es mayor o igual a 18
if (edad >= 18) {
  // Si la condición es verdadera, imprimimos este mensaje en la consola
  console.log("Eres mayor de edad.");
} else {
  // Si la condición es falsa, imprimimos este mensaje en la consola
  console.log("Eres menor de edad.");
}

//-------------------------------------------------------------------------------------------------------------
console.log("-------------Ejemplo de if-else-if-----------");

// Declaramos una variable llamada 'nota' y la inicializamos con un valor de 85
let nota = 85;

// Usamos una sentencia if-else-if para comprobar diferentes rangos de la variable 'nota'
if (nota >= 90) {
  // Si la nota es mayor o igual a 90, imprimimos este mensaje en la consola
  console.log("Tienes una calificación de A.");
} else if (nota >= 80) {
  // Si la nota es mayor o igual a 80 pero menor que 90, imprimimos este mensaje en la consola
  console.log("Tienes una calificación de B.");
} else if (nota >= 70) {
  // Si la nota es mayor o igual a 70 pero menor que 80, imprimimos este mensaje en la consola
  console.log("Tienes una calificación de C.");
} else if (nota >= 60) {
  // Si la nota es mayor o igual a 60 pero menor que 70, imprimimos este mensaje en la consola
  console.log("Tienes una calificación de D.");
} else {
  // Si la nota es menor que 60, imprimimos este mensaje en la consola
  console.log("Tienes una calificación de F.");
}

//-------------------------------------------------------------------------------------------------------------
console.log("-------------Ejemplo de if anidado-----------");

// Declaramos una variable llamada 'numero' y la inicializamos con un valor de 10
let numero = 10;

// Usamos una sentencia if para comprobar si la variable 'numero' es mayor que 0
if (numero > 0) {
  // Si la condición es verdadera, imprimimos este mensaje en la consola
  console.log("El número es positivo.");

  // Usamos otra sentencia if dentro del primer bloque if para comprobar si el número es mayor que 5
  if (numero > 5) {
    // Si esta condición es verdadera, imprimimos este mensaje en la consola
    console.log("El número es mayor que 5.");
  } else {
    // Si esta condición es falsa, imprimimos este mensaje en la consola
    console.log("El número es 5 o menor.");
  }
} else {
  // Si la primera condición es falsa, imprimimos este mensaje en la consola
  console.log("El número no es positivo.");
}

//-------------------------------------------------------------------------------------------------------------
console.log("-------------Ejemplo de if-else con una condición compuesta-----------");

// Declaramos dos variables llamadas 'a' y 'b' y las inicializamos con valores de 5 y 10 respectivamente
let a = 5;
let b = 10;

// Usamos una sentencia if para comprobar si 'a' es menor que 10 y 'b' es mayor que 5
if (a < 10 && b > 5) {
  // Si ambas condiciones son verdaderas, imprimimos este mensaje en la consola
  console.log("Ambas condiciones son verdaderas.");
} else {
  // Si alguna de las condiciones es falsa, imprimimos este mensaje en la consola
  console.log("Alguna de las condiciones es falsa.");
}

//-------------------------------------------------------------------------------------------------------------
console.log("-------------Ejemplo de if-else con valores booleanos-----------");

// Declaramos una variable llamada 'esValido' y la inicializamos con un valor de true
let esValido = true;

// Usamos una sentencia if para comprobar si 'esValido' es verdadero
if (esValido) {
  // Si la condición es verdadera, imprimimos este mensaje en la consola
  console.log("La variable es válida.");
} else {
  // Si la condición es falsa, imprimimos este mensaje en la consola
  console.log("La variable no es válida.");
}

//-------------------------------------------------------------------------------------------------------------