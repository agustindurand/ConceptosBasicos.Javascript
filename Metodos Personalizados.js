

// POSEE METODO // 
function Tarjetas (marca, color, extension, monto) {
    this.marca = marca; 
    this.color = color;
    this.extension = extension;
    this.monto = monto; 
    this.habilitado = function (nombre) {
        console.log (this.nombre + "tiene que hacer el examen de habiliacion de la tarjeta, por el monto de: " + monto)
    }
}

const tarjeta1 = new Tarjetas ("Visa", "Dorada", "Internacional", 1000000);