//lo primero que hay que hacer es crear unos usuarios con sus contraseñas
//despues vamos a crear dos funciones una para  el login y otra para la contaseña
//el usuario tendra 5 intentos para introducir correctamente el nombre de usuario  y la contraseña

//vamos a empezar por crear los usuarios y contraseñas
let usuarios = {
    'benito' : '67890',
    'pepe': '12345',
    'paco': '23456',
    'juan': '09876',
    'manuel': '66666'
}
function existeLogin (login){
    return login in usuarios;
}
function passwordCorrecto(login,password){
    return usuarios[login] === password;
}
let intentos = 5;
while (intentos > 0){

    let usuario = prompt('introduce tu nombre de usuario: ');
    let contraseña = prompt ('introduce tu contraseña: ');

    if (existeLogin(usuario)){
        if (passwordCorrecto(usuario,contraseña)) {
            alert('el nombre de usuario y la contraseña son correctos');
        }
    }


}