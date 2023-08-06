// UNA FUNCION QUE PERMITE REALIZAR ACCIONES ASINCRONICAMENTE, RECIBE DOS PARAMETROS, UNA FUNCION DE CALLBACK Y UN VALOR NUMERICO QUE REPRESENTA MILISEGUNDOS //
// LA FUNCION QUE PASAMOS POR PRIMER PARAMETRO SE EJECUTA LUEGO DE QUE TRANSCURRA EL TIEMPO DEFINIDO EN EL SEGUNDO PARAMETRO, POR EJEMPLO//

function decirHola () {
    console.log ("hola");
}

function decirChau () {
    console.log ("chau");
}


// De modo secuencial iria 
 /* decirHola();
decirChau(); */ 

setTimeout(decirHola, 3000); // Decir hola se va a ejecutar en 3 segundos

console.log ("sigo haciendo cosas...");

