
/* Calculadora
1-Sumar
2-Restar
3- Dividir 
4- Multiplicar */

const SUMAR = 1;
const RESTAR = 2;
const MULTIPLICAR = 3;
const DIVIDIR = 4;
let num1;
let num2;
let resultado = 0;
let opcion;
let operacion;
alert ("Bienvenido a la calculadora");
/* parseFloat devuelve el numero flotante que se haya ingresado, ya que sin este solamente podriamos ingresar String */
num1 = parseFloat(prompt("Ingrese el primer numero"));
num2 = parseFloat(prompt("Ingrese el segundo numero"));
opcion = parseInt(prompt(' 1- +  Sumar \n 2- - Restar \n 3- * Multiplicar \n 4- / Dividir \n Ingrese su opcion: '));

/* if (opcion === SUMAR) {
    resultado= num1 + num2;
    operacion = "+";
} else { 
    if (opcion === RESTAR) {
        resultado = num1 - num2;
        operacion = "-";
    } else {
        if (opcion === DIVIDIR) {
            resultado = num1 / num2;
            operacion= "/";
        } else {
            if (opcion === MULTIPLICAR) {
                resultado = num1 * num2;
                operacion = "*";
            }      
        }
    }
} */

switch (opcion) {
    case SUMAR: 
        resultado= num1 + num2;
         operacion = "+"; 
         break; /* El break corta el flujo de la estructura Switch */
    case RESTAR:
        resultado = num1 - num2;
        operacion = "-";
        break;
    case DIVIDIR:
        resultado = num1 / num2;
        operacion= "/";
        break;
    case MULTIPLICAR:
        resultado = num1 * num2;
        operacion = "*";
        break;
    default: 
        resultado= 0;
}


console.log("El resultado de la " + operacion + " entre " + num1 + " y " + num2 + " es " + resultado);