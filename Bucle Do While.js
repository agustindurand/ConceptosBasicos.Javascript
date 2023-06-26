
/* La estructura do while permite crear bucles que se ejecutan una o mas veces, dependiendo de la condicion indicada, a diferencia de while, garantiza
que el bloque de codigo se interpreta al MENOS UNA VEZ, PORQUE LA CONDICION SE EVALUA AL FINAL */ 

let continuar;
let precio;
let total = 0; /* variable que acumula se inicializa en 0 */ 

 do { 

console.log ("Agregando un nuevo item en el carrito de compras..");
precio = parseFloat (prompt ("precio del item: "));
total = total + precio; // acumulo // 
continuar = prompt("Desea agregar otro item en el carrito? si/basta");

} while (continuar == "si");
alert ("El total del carrito es de $" + total);