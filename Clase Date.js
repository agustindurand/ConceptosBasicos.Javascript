
const miFecha = new Date ();
console.log (miFecha);

//Metodos de la clase Date // 
console.log(miFecha.getDate()); // Devuelve el numero del mes 
console.log(miFecha.getDat()); // Devuelve el dia de la semana (del 1 al 7)
console.log(miFecha.getFullYear()); // Devuelve el año

// el constructor de la clase date nos permite crear objetos date con fechas diferentes, todos tipo number //

const casiNavidad = new Date (2021, 11, 25, 23, 59, 59);
console.log (casiNavidad); 