

// Falsey values (null, undefined, 0, string vacio, NAN, false), son valores que en una evaluacion de OR Y AND nos daran FALSO//
// si no es falsey value, el operador OR retorna uno de los dos // 

const usuario = {
    nombreUsuario: "Agustin",
    apellido: "Durand",
    edad: "",
    estadoCivil: "",

}

console.log ( 0  || Nan || undefined || null || " " || false || "hola" || "chau");
// va a devolver el valor Hola porque es VERDADERO y el Chau no porque ya encontro a Hola primero que es verdadero //
console.log (true && 5 && usuario && "pepe" && ""); // Con el AND devuelve el valor vacio "", porque es la FALSE

// El Or aunque uno sea verdadero, devuelve el valor verdadero y el AND si uno es falso, devuelve el valor falso porque ya la premisa es falsa //

