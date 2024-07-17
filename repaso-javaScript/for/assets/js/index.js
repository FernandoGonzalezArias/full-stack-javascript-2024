// ---------------------------------------------------------------------------------------------------
console.log("-------------------------Ejemplo básico de un bucle for--------------------------------");

// Declaramos una variable llamada 'i' y la inicializamos en 0
// Establecemos la condición del bucle para que se ejecute mientras 'i' sea menor que 5
// Después de cada iteración, incrementamos 'i' en 1
for (let i = 0; i < 5; i++) {
    // Imprimimos el valor de 'i' en la consola
    console.log("El valor de i es: " + i);
  }
  
  // ----------------------------------------------------------------------------------------------------
  console.log("-------------------------Ejemplo de un bucle for que recorre un array--------------------------------");
  
  // Declaramos un array llamado 'frutas' con algunos elementos
  let frutas = ["manzana", "banana", "cereza", "durazno"];
  
  // Usamos un bucle for para recorrer todos los elementos del array
  // Inicializamos 'i' en 0, y el bucle se ejecutará mientras 'i' sea menor que la longitud del array 'frutas'
  // Después de cada iteración, incrementamos 'i' en 1
  for (let i = 0; i < frutas.length; i++) {
    // Imprimimos el elemento actual del array en la consola
    console.log("Fruta: " + frutas[i]);
  }
  
  // ----------------------------------------------------------------------------------------------------
  console.log("---------------Ejemplo de un bucle for con una estructura más compleja----------------------");
  
  // Declaramos un array bidimensional llamado 'matriz'
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Usamos un bucle for anidado para recorrer todos los elementos de la matriz
  // El primer bucle recorre las filas de la matriz
  for (let i = 0; i < matriz.length; i++) {
    // El segundo bucle recorre las columnas de la matriz
    for (let j = 0; j < matriz[i].length; j++) {
      // Imprimimos el elemento actual de la matriz en la consola
      console.log("Elemento en [" + i + "][" + j + "]: " + matriz[i][j]);
    }
  }
  
  // ----------------------------------------------------------------------------------------------------
  console.log("---------------Ejemplo de un bucle for que usa la palabra clave 'break'----------------------");
  
  // Declaramos un array llamado 'numeros' con algunos elementos
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Usamos un bucle for para recorrer todos los elementos del array
  for (let i = 0; i < numeros.length; i++) {
    // Si el elemento actual es igual a 5, salimos del bucle con 'break'
    if (numeros[i] === 5) {
      break;
    }
    // Imprimimos el elemento actual del array en la consola
    console.log("Número: " + numeros[i]);
  }
  
  // ----------------------------------------------------------------------------------------------------
  console.log("---------------Ejemplo de un bucle for que usa la palabra clave 'continue'----------------------");
  
  // Usamos un bucle for para recorrer todos los elementos del array
  for (let i = 0; i < numeros.length; i++) {
    // Si el elemento actual es un número par, saltamos a la siguiente iteración con 'continue'
    if (numeros[i] % 2 === 0) {
      continue;
    }
    // Imprimimos el elemento actual del array en la consola
    console.log("Número impar: " + numeros[i]);
  }
  
    // ----------------------------------------------------------------------------------------------------