//pedir numero entre 1 y 100
// luego mirar que sea divisible ente 2, divisble entre 3, divisible entre 5 y entre 10 


//function divisible (numero) {
//    while (numero <= 0 || numero >100){
//        console.log("el numero no entraba en el rango 1-100");
//        numero = parseInt (prompt ("introduce un numero correcto entre 1-100"));
//    }
//    if (numero % 2 == 0){
//        console.log("el numero "+ numero +" es divisible entre 2");
//    } else {   console.log("el numero no es divisible entre 2"); }

//    if (numero % 3 == 0){
 //       console.log("el numero "+ numero +" es divisible entre 3");
//    } else {   console.log("el numero no es divisible entre 3"); }
//
//    if (numero % 5 == 0){
//        console.log("el numero "+ numero +" es divisible entre 5");
//    } else {   console.log("el numero no es divisible entre 5"); }

//    if (numero % 10 == 0){
 //       console.log("el numero "+ numero +" es divisible entre 10");
 //   } else {   console.log("el numero no es divisible entre 10"); }

//}
//var numero = parseInt ( prompt (" introduce un numero entre 1 y 100"));
//divisible(numero);


// lo hice a mi manera hasta ahi luego vi las instrucciones, lo vuelvo a hacer  mas abajo.

const MAXIMO = 100;
const MINIMO = 1;
const DIVISORES = [2, 3, 5, 10];

function pedirNumero() {
  let numero;
  do {
    numero = parseInt(prompt("Introduce un número entero entre 1 y 100:"));
  } while (isNaN(numero) || numero < MINIMO || numero > MAXIMO);
  return numero;
}

function comprobarDivisibilidad(numero) {
  let divisibilidad = [];
  for (const divisor of DIVISORES) {
    if (numero % divisor === 0) {
      divisibilidad.push(divisor);
    }
  }
  return divisibilidad;
}

function mostrarResultado(divisibilidad) {
  if (divisibilidad.length === 0) {
    console.log("El número no es divisible entre 2, 3, 5 ni 10.");
  } else {
    console.log(`El número es divisible entre ${divisibilidad.join(", ")}.`);
  }
}

const numero = pedirNumero();
const divisibilidad = comprobarDivisibilidad(numero);
mostrarResultado(divisibilidad);
