
// Bucle For Of para recorrer elementos de la variable letra // 
for (let letra of "Hola") {
    setTimeout ( ( ) => { //Funcion a ejecutarse // 
        console.log (letra) // Imprimimos valor
    }, 1000 ) // Se ejecute luego de un segundo//
}

// Se vera la letra "Hola" impresa en la consola con un segundo de diferencia entre cada letra // 

//Segundo bucle funciona de forma similar // 
for (let letra of "Mundo") {
    setTimeout ( ( ) => {
        console.log (letra)
    }, 3000 )
}