// Document Objet Model // 
// Se accede a los elementos HTML // 
// Cada etiqueta de HTML es un objeto al que llamamos NODO, NODOS PADRE E NODOS HIJOS
// Empleamos document (es el objeto global)//
// console. dir() es la manera de ver todas las propiedades de un objeto JavaScript específicado por consola,//

console.log(document.URL); // tE PERMITE VER LA URL DEL ARCHIVO //

console.log(document.scripts); // TE PERMITE VER LA CANTIDAD DE SCRIPTS DEL CODIGO //

// Metodos para acceder elementos del dom utilizando el Document //
// getElementByID, getElementsByClassName, getElementsByTagName // 

const mih1 = document.getElementById('uno'); //Si encuentra el elemento lo retorna, de lo contrario devuelve null //
console.log(mih1); // Nodo de texto //
console.log(mih1.textContent);
mih1.textContent = "My Shopping card";