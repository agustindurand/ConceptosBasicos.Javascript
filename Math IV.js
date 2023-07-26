
// Genera un numero random aleatorio entreo 0 y 1 // 

console.log (Math.random()); // Cualquier numero entre 0 y 1//

// Si quiero establecer un rango para mis valores al azar entre determinada serie //

let valorAzar = Math.random() + 1 // establezco el valor inferior (desde donde comienza)//
console.log (valorAzar); 

//Formula para establecer un numero random entre dos limites // 

// Math.random () * (Limite Superior - Limite Inferior ) + Limite Inferior //

console.log (Math.random()* (6 - 1) + 1); // Numero entre Uno y Seis // 


console.log (Math.round(Math.random()* (6 - 1) + 1)); // Random con redondeo //