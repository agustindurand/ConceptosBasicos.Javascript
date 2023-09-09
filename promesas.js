// Pending, Fullfilled, rejected //
// representa un evento a futuro, es una accion asincronica que se puede completar en algun momento //

const eventoFuturo = () => {

new Promise ( (resolve, reject) => {
    //Cuerpo de la promesa // 
})  }

// EJEMPLO //

const saludo = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve ("Buenos Dias");
    }, 3000 );
});

console.log (saludo);
setTimeout(() => {
    console.log(saludo);
}, 3000);