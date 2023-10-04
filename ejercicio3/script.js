//pedir numero entre 1 y 100
// luego mirar que sea divisible ente 2, divisble entre 3, divisible entre 5 y entre 10 
function divisible (numero) {
    while (numero <= 0 || numero >100){
        console.log("el numero no entraba en el rango 1-100");
        numero = parseInt (prompt ("introduce un numero correcto entre 1-100"));
    }
    if (numero % 2 == 0){
        console.log("el numero "+ numero +" es divisible entre 2");
    } else {   console.log("el numero no es divisible entre 2"); }

    if (numero % 3 == 0){
        console.log("el numero "+ numero +" es divisible entre 3");
    } else {   console.log("el numero no es divisible entre 3"); }

    if (numero % 5 == 0){
        console.log("el numero "+ numero +" es divisible entre 5");
    } else {   console.log("el numero no es divisible entre 5"); }

    if (numero % 10 == 0){
        console.log("el numero "+ numero +" es divisible entre 10");
    } else {   console.log("el numero no es divisible entre 10"); }

}

var numero = parseInt ( prompt (" introduce un numero entre 1 y 100"));
divisible(numero);