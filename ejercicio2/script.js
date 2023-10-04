function ordenCreciente (n1, n2, n3, n4){
    //comprobar si alguno de los numeros no es positivo con un while por si es negativo volver a pedirlos 

    while (n1 <= 0 ||n2 <= 0 ||n3 <= 0 ||n4 <= 0  ){
        console.log("porfavor ingrese numeros enteros positivos");
        n1 = parseInt(prompt("Ingrese el primer numero"));
        n2 = parseInt(prompt("Ingrese el segundo numero"));
        n3 = parseInt(prompt("Ingrese el tercer numero"));
        n4 = parseInt(prompt("Ingrese el cuarto numero"));
    }
    if (n1 < n2 && n2 < n3 && n3 < n4) {
        return true;
    } else {
        return false;
    }



} 

 //ya tenemos la funcion que nos comprueba si son positivos 
 //y si estan en orden creicente ahora vamos a pedir los 4 numeros
 
  var num1 = parseInt(prompt("Ingrese el primer numero"));
  var num2 = parseInt(prompt("Ingrese el segundo numero"));
  var num3 = parseInt(prompt("Ingrese el tercer numero"));
  var num4 = parseInt(prompt("Ingrese el cuarto numero"));
var resultado = ordenCreciente(num1, num2, num3, num4);
console.log(" los numeros introducidos están en orden creciente: ", resultado);