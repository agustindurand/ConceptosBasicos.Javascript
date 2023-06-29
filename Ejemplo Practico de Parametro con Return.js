


 //RETORNO DE UN VALOR //

 // Ejemplo agregando a un carrito de compras un elemento //
 // agregar un item al carrito de compras implica que el valor total del carrito va a ir incrementando //

 let total = 0; 

 function agregarItemCarrito(totalCarrito, precio, cantidad) { /*Los parametros son variables que solo existen en el contexto de la funcion */
    return totalCarrito + precio *cantidad; 
 }

 function vaciarCarrito () {
    console.log ("Vaciamos los items del carrito...");
    return 0;
 }

 console.log ("Total del carrito: " + total);

 agregarItemCarrito(total, 30,50, 3); // Serian los valores TOTAL = TOTALCARRITO ,  30, 50 = PRECIO, 3= CANTIDAD //

 console.LOG ("Total con el nuevo item añadido: " + total);
 total = agregarItemCarrito(total, 50,20, 5);
 console.log ("Total con el nuevo item añadido: "+ total); 

