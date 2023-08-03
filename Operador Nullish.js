
// Este operador (??) funciona igual que el operador OR con la diferencia que admite mas valores como "verdaderos", solo obtenemos nullish en dos casos/ 
// Solo considera valores falsos al undefined y null // 

console.log ( false ?? "hola"); 


/* 
const usuario = {
    nombreUsuario: "Agustin",
    apellido: "Durand",
    edad: null,
    estadoCivil: null,
    mascota: {nombre: "piter", tipo: "gato"}
};
*/ 

const usuario = null;

function mostrarMascota (usuario) {
    console.log(usuario?.mascota.nombre ?? "No existe el usuario");
    console.log(usuario?.mascota.tipo);
}

// usuario? verifica si existe o no el objeto //
mostrarMascota (usuario);