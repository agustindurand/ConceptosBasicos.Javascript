// Ceil, Flor y Round son metodos de redondeo de numeros//

// Ceil -> nos devuelve el entero mas proximo por encima de nuestro flotante (redondeo hacia arriba) // 
// Floor -> nos devuelve el entero mas cercano pero por debajo de nuestro flotante (redondeo hacia abajo) //
// Round -> nos devuelve el entero mas proximo a nuestro valor flotante -> la verdadera aproximacion // 


const carrito = [ {nombre: "Producto1", precio: 500.12}, {nombre: "Producto2", precio: 222.232}]

console.log ("Redondeo para arriba");
carrito.forEach ((item)=>   {
    console.log (Math.ceil(item.precio));
});
console.log ("Redondeo para abajo");
carrito.forEach ((item)=>   {
    console.log (Math.floor(item.precio));
});
console.log ("Redondeo honesto");
carrito.forEach ((item)=>   {
    console.log (Math.round(item.precio));
});