
/* o expresion de funcion  */ 
/* generalmente, las funciones anonimas se asignan a constantes */ 
/* se utiliza para ser pasada como parametro o asignada a una variable */ 

const suma = function (a,b) {return a + b}
const resta = function (a,b) {return a-b}
console.log (suma(15.20))
console.log (resta(15,20))

const saludar = function () {
    alert("Hola");
}
saludar (); /* declarar funciones dentro de otros parametros */ 
/* la constante se vuelve una funcion o una expresion */ 