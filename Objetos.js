/* Un objeto es una coleccion de datos relacionado como una entidad, contienen propiedades y valores agrupados */ 
// forma literal de declaracion de objetos //

const persona1 = {nombre:"Alex", edad: 23, apellido: "De la Rioja"};
console.log (persona1);

// De esta manera se accede a el atributo dentro del objeto // 
console.log (persona1.nombre);

//Si coloco un atributo que no esta definido va a salir undefined //

console.log (persona1.peso);

// Si quiero modificar el contenido de un atributo: //

persona1.nombre = "Juan"; 

console.log (persona1);

// Otra forma de acceder a los atributos //
// llega a traves de una variable el valor // 
// 

let atributo = "nombre";
console.log (persona1  [atributo]);