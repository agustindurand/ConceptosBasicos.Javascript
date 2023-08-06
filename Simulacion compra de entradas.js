

let idTimeOutEntradas;
let idTimeoutComra; 

function compraEntradas (cantEntradas) {
    console.log (`Las ${cantEntradas} han sido reservados, usted posee 10 segundos`)
    idTimeOutEntradas = setTimeout (() => {
        console.log(`Se termino tiempo`);
    }, 10000);
}

