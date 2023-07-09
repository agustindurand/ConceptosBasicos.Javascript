
//para sumar un elemento a un array ya existente, se utiliza el metodo push de esta forma: //

// Con el Push se va a agregar a el final //


const miArray = ["marca", 3, "palabra"];
console.log (miArray);

let nuevaletra = "K";
miArray.push (nuevaletra);

console.log (miArray.length);
console.log (miArray);

// Con el metodo UNSHIFT se inserta al principio el array // 

miArray.unshift (99);
console.log(miArray);

// Ejemplo de Carrito de compras // 

const carrito = []
function insertarProductoEnCarrito (producto) {
    carrito.push (producto); //Agrega el producto al final //
}

function cargarProductosEnCarrito () {
    let seguir;
    let producto;
    do {
        producto = prompt ("Ingrese producto");
        insertarProductoEnCarrito (producto);
        seguir = prompt ("Desea continuar? si/no");
     } while (seguir === "si");    }


function muestraCarrito () {
    for (let i =0; i < carrito.length; i++) {
        console.log (`${i} : ${carrito[i]} `);
    }
}

cargarProductosEnCarrito ();
muestraCarrito ();

function eliminarItemdelCarrito () {
    let indice; 
    muestraCarrito();
    indice  = prompt ("Eliga el indice donde esta el elemento que desea eliminar");
    carrito.splice (indice,1); //METODO SPLICE // 
    alert ("Elemento eliminado");
    muestraCarrito();
}


// Quitar elementos del array //
// para quitar el primer elemento utilizamos metodo shift y para quitar ultimo elemento usamos el pop // 

let elementoQuitado = carrito.shift (); 
console.log ("Quite el elemento " + elementoQuitado);
muestraCarrito();

let otroElementoQuitado = carrito.pop (); 
console.log ("Quite el elemento " + otroElementoQuitado);
muestraCarrito();

//Metodo Splice, permite eliminar uno o varios elementos de un array en cualquier posicion //
// es decir un elemento en particular //
//funciona con dos parametros, el primero es el indice donde se ubica el metodo para trabajar y el segundo es la cantidad de elementos a elimarr desde esa posicion //
// FUNCION ELIMINAR UN ITEM DEL CARRITO //