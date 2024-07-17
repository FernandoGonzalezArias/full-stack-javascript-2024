//---------------------------------------------------------------------------------------------------------
/*
En JavaScript, los bloques `try`, `catch`, `finally` y la sentencia `throw` se usan para manejar errores y excepciones.

- `try`: Un bloque de código donde se coloca el código que puede lanzar una excepción.
- `catch`: Un bloque de código que se ejecuta si ocurre una excepción en el bloque `try`.
- `finally`: Un bloque de código que se ejecuta siempre, después de que se ejecuten los bloques `try` y `catch`, sin importar si ocurrió una excepción o no.
- `throw`: Se usa para lanzar una excepción definida por el usuario.

*/

//---------------------------------------------------------------------------------------------------------

  /*
  Explicación

 -try: Se usa para envolver el código que puede lanzar una excepción.
  Si el código dentro del bloque try lanza una excepción, la ejecución se transfiere al bloque catch.

 -catch: Se usa para manejar las excepciones que ocurren en el bloque try.
  Este bloque recibe el objeto de error que describe lo que salió mal.

 -finally: Se usa para ejecutar código que debe ejecutarse sin importar si se lanzó una excepción o no. 
 Este bloque es opcional.

 -throw: Se usa para lanzar una excepción definida por el usuario. 
 Cuando se usa throw, se puede lanzar cualquier valor, aunque típicamente se lanza un objeto Error.
  
  */ 

//-----------------------------------------------------------------------------------------------------

console.log("---------------------Ejemplo básico de try-catch------------------------------");

try {
    // Intentamos ejecutar este código que intencionalmente genera un error
    noExisteFuncion();
  } catch (error) {
    // Si ocurre un error, este bloque se ejecuta
    console.log("Se produjo un error: " + error.message);
  }
  
  //-----------------------------------------------------------------------------------------------------
  console.log("---------------------Ejemplo de try-catch con throw------------------------------");
  
  try {
    // Declaramos una variable llamada 'edad' y la inicializamos con un valor de -5
    let edad = -5;
  
    // Si la edad es menor que 0, lanzamos una excepción con throw
    if (edad < 0) {
      throw new Error("La edad no puede ser negativa");
    }
  
    // Si no se lanza una excepción, imprimimos la edad en la consola
    console.log("La edad es: " + edad);
  } catch (error) {
    // Si se lanza una excepción, este bloque se ejecuta
    console.log("Se produjo un error: " + error.message);
  }
  
 //-----------------------------------------------------------------------------------------------------

  console.log("---------------------Ejemplo de try-catch-finally------------------------------");
  
  try {
    // Intentamos ejecutar este código
    let numeros = [1, 2, 3];
    console.log(numeros[10]);
  } catch (error) {
    // Si ocurre un error, este bloque se ejecuta
    console.log("Se produjo un error: " + error.message);
  } finally {
    // Este bloque se ejecuta siempre, ocurra o no una excepción
    console.log("El bloque finally siempre se ejecuta.");
  }
  
//-----------------------------------------------------------------------------------------------------
  console.log("---------------------Ejemplo de try-catch con una función------------------------------");
  
  function dividir(a, b) {
    // Intentamos ejecutar este código
    try {
      if (b === 0) {
        // Si 'b' es 0, lanzamos una excepción con throw
        throw new Error("No se puede dividir por cero");
      }
      // Si no se lanza una excepción, devolvemos el resultado de la división
      return a / b;
    } catch (error) {
      // Si se lanza una excepción, este bloque se ejecuta
      console.log("Se produjo un error: " + error.message);
    } finally {
      // Este bloque se ejecuta siempre, ocurra o no una excepción
      console.log("Operación de división completada.");
    }
  }
  
  // Llamamos a la función dividir con argumentos válidos
  console.log("Resultado: " + dividir(10, 2));
  
  // Llamamos a la función dividir con un divisor de cero para generar una excepción
  console.log("Resultado: " + dividir(10, 0));

  //---------------------------------------------------------------------------------------------------------
  