// El operador in devuelve true si la propiedad especificada existe en el objeto //
// Mientras que el bucle for in permite acceder a todas las propiedades del objeto y se recorre toda la lista de atributos //
// con la pablabra clave propiedad recorre todos los atributos del objeto // 


const tarjeta1 = {marca: "Visa", tipo: "Dorada", extension: "internacional"};

for (const atributo in tarjeta1) {
    console.log (atributo + ": " + tarjeta1 [atributo]); 
}

// Condicional con operador In // 

if ("peso" in tarjeta1) {
    console.log ("El atributo esta en tarjeta")
} else { 
  console.log ("El atributo no esta")
}