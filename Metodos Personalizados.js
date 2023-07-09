

// POSEE METODO // 
function Persona (nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () {console.log ("Hola soy" + this.nombre) }
}
const persona1 = new Persona ("Homero", 35, "Av SiempreViva");
persona1.hablar ();