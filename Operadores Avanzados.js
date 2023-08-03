
// Sugar Syntax // 

// Operador ++ // 

let num = 10;
num = num + 1; 
num += 1; 
num ++ // SIMPLIFICACION // 

// Es operador de post-incremento, primero ejecuta la sentencia y luego hace el incremento // 

// Existe un operador de pre-incremento y luego ejecuta la sentencia //

let b = 7;
mostrarDato (++b); // Se coloca el ++ ADELANTE // 





// Operador ternario, es simplificacion de la estructura if else.. // 

// La condicion resuelve true o false, en caso 1 se escribe la instruccion a ejecutar si la condicion es verdadera y caso 2 si es falsa //

// condicion ? caso1 : caso 2;

temperatura > 30 ? alert ("Dia caluroso") : alert("dia agradable"); 

// Otro ejemplo // 

const PERMISO_CONCEDIDO = 1;
const PERMISO_DENEGADO = 2;

let asignarPermiso; 

asignarPermiso = (nombreUsuario === "User1") ? PERMISO_CONCEDIDO : PERMISO_DENEGADO;

console.log (asignarPermiso);
