/* La estructura While permite crear bucles que se ejecutan cero o mas veces 
dependiendo de la condicion indicada, el funcionamiento del bucle while se resume en mientras se cumpla la condicion indicada,
repite las instrucciones incluidas dentro del bucle, asumimos que en algun momento la repeticion va a finalizar, si la comparacion no se realiza
adecuadamente podemos generar el llamado bucle infinito */ 

/* Ejemplo */

let continuar = "si";
let precio;
let total = 0; /* variable que acumula se inicializa en 0 */ 

while (continuar == "si") { 

console.log ("Agregando un nuevo item en el carrito de compras..");
precio = parseFloat (prompt ("precio del item: "));
total = total + precio; // acumulo // 
continuar = prompt("Desea agregar otro item en el carrito? si/basta");

}
alert ("El total del carrito es de $" + total);