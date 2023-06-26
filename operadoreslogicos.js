
//Operadores Logicos  //                               
// AND -> && -> Y //

// OR -> || -> O  //

// NOT  ->  !  -> NEGACION // 

// DEVUELVE TRUE O FALSE // 

//&&//

let a= 18;
let b = 21;

let edad = prompt ("Ingrese su edad");

if (edad >= 18 && edad <= 21) {
    console.log ("La persona tiene entre 18 y 21 años");
}

// ! // 

let variableTrue = true;
let resultado = !variableTrue; //entonces es false por el operador logico//

console.log (resultado);

// otro ejemplo de operador de negacion //

let usuario = prompt ("Ingrese nombre de usuario");
let contrasena = prompt ("Ingrese contraseña");

  /* if ( (usuario == ' ') ||  (contrasena == ' ') ) {
    alert ("Alguno de los campos esta vacio");
 } else {
    alert ("Los datos estan ingresados correctamente");
 } */ 

 if ( !(usuario == ' ') && (contrasena == ' ') ) {
    alert ("Los datos fueron ingresados correctamente!") 
 } else {
    alert ("Alguno de los campos esta vacio");
 }

// || //

let edad2 = prompt ("Ingrese su edad");

if (edad2 < 18 || edad2 > 21 ) {
    console.log ("La persona no tiene entre 18 y 21 años");
} else {
    console.log ("La persona tiene entre 18 y 21 años"); 
} 

