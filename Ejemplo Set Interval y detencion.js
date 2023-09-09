function decirHola () {
    console.log ("hola");
}

function decirChau () {
    console.log ("chau");
}

console.log ("..aca viene el codigo");
const idInterval1 = setInterval (decirHola,2000);
console.log ("...mas codigo");
const idInterval2 = setInterval (decirChau,3000); // Cada uno tiene un identificador // 
console.log("continua flujo...")

// Clear Interval o Clear TimeOut//
// Se encarga de cortar el SetTimeOut o el Set Interval //
// Cada SetInterval en caso de tener muchos en el codigo, tiene un identificador que se detecta mediante la funcion counter++ // 

setTimeOut (() => { 
clearInterval (idInterval1);
clearInterval (idInterval2);
 }, 5500);


