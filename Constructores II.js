

//Ejemplo de constructor de productos // 

function Tarjetas (marca, color, extension, monto) {
    this.marca = marca; 
    this.color = color;
    this.extension = extension;
    this.monto = monto; 
}

const tarjeta1 = new Tarjetas ("Visa", "Dorada", "Internacional", 1000000);