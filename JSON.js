
// EL STORAGE NO GUARDA OBJETOS Y NO GUARDA ARRAYS, TRADUCE TODO A STRING // 
const objetito = {nombreItem: "leche", precio: 13.50};
const productos= [{nombreItem: "leche", precio: 13.50}, {nombreItem: "galleta", precio: 13.50}];

// En JavaScript, el objeto JSON proporciona métodos para convertir objetos JavaScript en cadenas JSON y viceversa: JSON.stringify(): Convierte un objeto o valor JavaScript en una cadena JSON. JSON.parse(): Convierte una cadena JSON en un objeto JavaScript.Cuando se trabaja con localStorage o sessionStorage, los datos que se almacenan son cadenas de texto. Para almacenar objetos JavaScript complejos, primero se debe convertir el objeto en una cadena JSON utilizando JSON.stringify(). Al recuperar los datos almacenados, se debe usar JSON.parse() para convertir la cadena JSON de nuevo a un objeto JavaScript.// 

const objetitoJSON = JSON.stringify(objetito);
localStorage.setItem ("objetito", objetitoJSON);

// PARSEAR, CONVERTIR JSON A OBJETO JAVASCRIPT //

const stringObjetito = localStorage.getItem("objetito");
const objetitoJS = JSON.parse (stringObjetito);
console.log (objetitoJS);