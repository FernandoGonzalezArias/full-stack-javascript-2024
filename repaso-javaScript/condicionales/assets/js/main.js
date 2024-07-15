// Definimos una variable con un valor numérico
let numero = 10;
console.log("Valor inicial de 'numero':", numero);

//------------------------------------------------------------------------------------------------

// Usamos una declaración condicional 'if' para verificar si el número es mayor que 5
if (numero > 5) {
    // Si la condición es verdadera, ejecutamos este bloque de código
    console.log("El número es mayor que 5");
    document.getElementById("resultado1").innerText = "El número es mayor que 5.";
} else {
    // Si la condición es falsa, ejecutamos este bloque de código
    console.log("El número no es mayor que 5");
    document.getElementById("resultado1").innerText = "El número no es mayor que 5.";
}

//------------------------------------------------------------------------------------------------


// Ahora usamos una declaración 'if...else if...else' para verificar múltiples condiciones
if (numero > 15) {
    // Si el número es mayor que 15
    console.log("El número es mayor que 15");
    document.getElementById("resultado2").innerText = "El número es mayor que 15.";
} else if (numero > 10) {
    // Si el número es mayor que 10 pero no mayor que 15
    console.log("El número es mayor que 10 pero no mayor que 15");
    document.getElementById("resultado2").innerText = "El número es mayor que 10 pero no mayor que 15.";
} else {
    // Si ninguna de las condiciones anteriores es verdadera
    console.log("El número es 10 o menor");
    document.getElementById("resultado2").innerText = "El número es 10 o menor.";
}

//------------------------------------------------------------------------------------------------


// Usamos una declaración 'switch' como alternativa a múltiples 'if...else if...else'
switch (numero) {
    case 5:
        // Si el número es 5
        console.log("El número es 5");
        document.getElementById("resultado3").innerText = "El número es 5.";
        break;
    case 10:
        // Si el número es 10
        console.log("El número es 10");
        document.getElementById("resultado3").innerText = "El número es 10.";
        break;
    case 15:
        // Si el número es 15
        console.log("El número es 15");
        document.getElementById("resultado3").innerText = "El número es 15.";
        break;
    default:
        // Si el número no es ninguno de los casos anteriores
        console.log("El número no es 5, 10, ni 15");
        document.getElementById("resultado3").innerText = "El número no es 5, 10, ni 15.";
        break;
}

//------------------------------------------------------------------------------------------------
