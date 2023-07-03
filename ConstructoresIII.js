
//Ejemplo de constructor de personajes // 

function Personaje (nombre, apellido, alias, aliado, ataque) {
    this.nombre = nombre;
    this.apelido = apellido;
    this.alias = alias;
    this.aliado = aliado;
    this.ataque = ataque;
}
const personaje1 = new Personaje ("Anthony", "Stark", "Iron Man", "War Machine", "Rayo Propulsor");
console.log (personaje1); 