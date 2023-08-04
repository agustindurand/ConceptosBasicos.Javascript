

const usuario = {
    username: "pepe232",
    nombre: "pepe",
    edad: 43,
    estadoCivil: null
}

// imprimimos por consola los valores de los atributos clasicamente //

function mostrarUnUsuario (usuario) {
    console.log (usuario.username);
    console.log (usuario.nombre);
    if (usuario.edad > 18) {
        console.log ("el usuario es mayor de edad");
    } else {
        console.log ("El usuario es menor");
    }
}

// OPERACION DE DESESTRUCTURACION // 

// Se declara variable o constante distinta //
// declaramos 3 variables que tienen de nombre el mismo que los atributos // 

let {username, nombre, edad} = usuario; 

// Desestructuracion de Arrays // 

