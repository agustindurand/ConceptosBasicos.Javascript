// Metodo de array que obtiene el indice de un valor que estamos buscando en el array //
// si no encuentra ningun elemento que coincide me va a devolver un indice invalido (-1) //

const carrito = ["jabon", "leche", "pan", "galletitas"];
let elemento = prompt ("Ingrese el elemento a buscar");
let indice = carrito.indexOf(elemento); 



 if (indice !== -1) {
    console.log ("El elemento se encuentra en la posicion: ", indice);
 } else {
    console.log ("El elemento no existe")
; }