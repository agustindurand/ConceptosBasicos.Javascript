/* El scope o ambito de una variable es la zona del programa en la cual se define, el contexto
al que pertenece la misma dentro de un algoritmo, restringiendo su uso y alcance, JS define dos ambitos
global y local */ 

/* Si una variable se declara fuera de cualquier funcion es GLOBAL */ 
let variableGlobal = 5; // GLOBAL // 

function mostrarDato () {
    // LOCAL // 
     let variableLocal = 3; 


     console.log (variableLocal);
     console.log ("variable global dentro de mostrarDato: " + variableGlobal); 
}

mostrarDato ();
console.log ("variable global: " + variableGlobal);
console.log ("variable local a mostrarDato " + variableLocal); // ESTA NO SE VISUALIZA DEBIDO A QUE LA FUNCION YA TERMINO // 

 