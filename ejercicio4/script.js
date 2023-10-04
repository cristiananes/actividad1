// Declarar las variables para almacenar los operandos, el operador y el resultado
let operando1;
let operando2;
let operador;
let resultado;

// Declarar un bucle que se repita hasta que el operador sea FIN
do {
  // Pedir el primer operando
  operando1 = parseInt(prompt("Introduce el primer operando"));

  // Comprobar si el operando es válido
  if (isNaN(operando1)) {
    // Mostrar un mensaje de error
    alert("Operando inválido. Inténtalo de nuevo.");
    // Saltar al siguiente ciclo del bucle
    continue;
  }

  // Pedir el segundo operando
  operando2 = parseInt(prompt("Introduce el segundo operando"));

  // Comprobar si el operando es válido
  if (isNaN(operando2)) {
    // Mostrar un mensaje de error
    alert("Operando inválido. Inténtalo de nuevo.");
    // Saltar al siguiente ciclo del bucle
    continue;
  }

  // Pedir el operador
  operador = prompt("Introduce la operación a realizar (+, -, *, / o FIN para finalizar) ");

  // Comprobar si el operador es válido
  if (operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/" && operador !== "FIN") {
    // Mostrar un mensaje de error
    alert("Operador inválido. Inténtalo de nuevo.");
    // Saltar al siguiente ciclo del bucle
    continue;
  }

  // Comprobar si el operador es FIN
  if (operador === "FIN") {
    // Mostrar un mensaje de despedida
    alert("Gracias por usar la calculadora. Hasta pronto.");
    // Salir del bucle
    break;
  }

  // Comprobar si el operador es la división y el segundo operando es cero
  if (operador === "/" && operando2 === 0) {
    // Mostrar un mensaje de error
    alert("No se puede dividir entre cero. Inténtalo de nuevo.");
    // Saltar al siguiente ciclo del bucle
    continue;
  }

  // Usar un switch para realizar la operación según el operador introducido
  switch(operador) {
    case "+":
      // Sumar los operandos y asignar el resultado a la variable resultado
      resultado = operando1 + operando2;
      break;
    case "-":
      // Restar los operandos y asignar el resultado a la variable resultado
      resultado = operando1 - operando2;
      break;
    case "*":
      // Multiplicar los operandos y asignar el resultado a la variable resultado
      resultado = operando1 * operando2;
      break;
    case "/":
      // Dividir los operandos y asignar el resultado a la variable resultado
      resultado = operando1 / operando2;
      break;
  }

  // Mostrar en consola el resultado de la operación
  console.log(operando1 + " " + operador + " " + operando2 + " = " + resultado);

} while (true); // El bucle se repetirá hasta que se cumpla alguna condición de salida (break)
