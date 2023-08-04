// Desparrama un array o un objeto, en otras palabras, cambiar la forma en la que se presentaba el array u objeto //

// Pasa de ser un Array a una lista de valores //

const valores = [2, 3, 4, 5, 6];

console.log(math.max(...valores));


// Dos formas de poner, el primero va a mostrar el Array el segundo va a mostrar la lista de valores // 
console.log(valores);
console.log(...valores); 


// Otro uso es concatenar arrays //

const array = [1,2,3,4,"juan"];
const array2 = [1,22,3333,44, "miguel"];

//Forma clasica de concatenar //
const array3 = array.concat(array2);
console.log (array3);

const arrayConcatenandoSpread = [...array, "hola", ...array2];
//podes agregar otro elemento en la concatenacion como el string //
console.log(arrayConcatenandoSpread);

// Copiar Arrays es otra funcionalidad con el spread // 

const stock = [new Item ("arroz", 2,5, 4), new Item ("tomate", 222, 3)]
const stock2 = stock; 

stock2.push (newItem ("leche", 100, 1)); 
console.log (stock);
console.log(stock2);

// con Spread

const stock5 = [...stock]; 