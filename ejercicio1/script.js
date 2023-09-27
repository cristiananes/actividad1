var entero = prompt("introduce un numero entero");
//comprobar si es un numero
if (!isNaN(entero)) {
    console.log('es un número');
} else {
    alert('no es un número');}
//comprobar si es entero


if (parseInt(Number(entero)) == entero){
    console.log("es un entero");
    
} else {alert("no es un entero")}

function sumarNumeros(entero) {
    var suma = 0;
    for (var i = 0; i < entero.length; i++) {
        suma += entero[i];
    }
    return suma;
}
sumarNumeros();
