var entero =parseInt( prompt("introduce un numero entero"));

//comprobar si es un numero
function esNumero (entero){
    if (!isNaN(entero)) {
        return  console.log('es un número');
    } else {
        return alert('no es un número');}
}
esNumero(entero);

//comprobar si es entero

function esEntero (entero){
    if (parseInt(Number(entero)) == entero){
        console.log("es un entero");
        
    } else {alert("no es un entero");}
}
esEntero(entero);


//ahora vamos a comprobar si el número es positivo
function esPositivo (entero){
    if (entero <0){
        console.log("el numero es negativo");
    } else if (entero == 0){
        console.log("el número es 0");
    }  else {console.log("es un numeor positivo")}
}
esPositivo(entero);
//hacemos el sumatorio
function sumarNumeros(entero) {
    var suma = 0;
    for (var i = 0; i < entero; i++) {
        suma = entero[i] + suma;
    }
    return suma;
}
console.log(sumarNumeros(entero));
