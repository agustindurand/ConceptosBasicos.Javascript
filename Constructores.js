/* En JS, el constructor de un objeto es uan funcion que usamos para crear un nuevo objeto cada vez que sea necesario */
/* se inicializan las propiedades del nuevo objeto con el NEW */ 

function Persona (nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

// La palabra NEW establece que se crea un nuevo objeto y envia los nuevos valores //
const Persona1 = new Persona ("Homero", 45, "Av Siempreviva 742");
const persona2 = new Persona ("Rick", 23, "Coronel 122");


// Uso clasico de construccion de objetos // 
const tarjeta1 = {marca: "Visa", color: "Plateada", monto: 1000000};
const tarjeta2 = {marca: "Mastercard", color: "Dorada", monto: 23300000};