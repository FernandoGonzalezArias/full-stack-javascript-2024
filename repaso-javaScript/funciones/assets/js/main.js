//FUNCIONES

function suma(numero1, numero2){
     var resultado = numero1 + numero2
     return resultado
}

function resta(numero1, numero2){
    var resultado = numero1 - numero2
    return resultado
}

function multiplicacion(numero1, numero2){
    var resultado = numero1 * numero2
    return resultado
}

function division(numero1, numero2){
    var resultado = numero1 / numero2
    return resultado
}
//el usuario ingresa los numeros a utilizar
var num1 = +prompt("Ingrese el primer numero: "); 
var num2 = +prompt("Ingrese el segundo numero: ");

//asignamos y creamos el resutado de la operacion a una variable
var resultadoSuma = suma(num1, num2);
var resultadoResta = resta(num1, num2);
var resultadoMultiplicacion = multiplicacion(num1, num2);
var resultadoDivision = division(num1, num2);

//vemos el valor de la variable que ya contiene los resultados 
console.log("El resultado de la suma es: " + resultadoSuma);
console.log("El resultado de la resta es: " + resultadoResta);
console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion);
console.log("El resultado de la division es: " + resultadoDivision);