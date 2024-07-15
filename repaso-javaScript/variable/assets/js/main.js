//VARIABLES 

var num1 = 5;
var num2 = 10;
var resultado = num1 + num2;
var nombre = "Jose";

console.log("Segun " + nombre + " el resultado de la suma es: "+ resultado)

//PROMPT INGRESO DE VALOR POR PANTALLA

var num3, num4, resultado;
//parseInt se usa para transformar de texto a numero
num3 = parseInt(prompt("Ingrese el primer numero: "));
// el + antes del prompt tambien hace que se tranforme el texto ingresado a valor numerico
num4 = +prompt("Ingrese el segundo numero: ");
resultado = num3 + num4;

alert("El resultado es: " + resultado )