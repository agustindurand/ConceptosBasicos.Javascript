
 function calculadora (primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero; /*En el return, el Break no es necesario colocarlo, porque no se va a ejecutar, el codigo termina en el return */   
        case "-":
            return primerNumero - segundoNumero;     
        case "*":
            return primerNumero * segundoNumero;
        case "/":
        default: 
            return 0;
    }
 }

 console.log (calculadora (10,5, "*"));

 /* Una vez que ejecutas un return termino */ 