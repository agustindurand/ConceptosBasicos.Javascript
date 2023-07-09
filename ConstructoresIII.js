
//Ejemplo de constructor de personajes // 

function Personaje (nombre, apellido, alias, aliado, ataque) {
    this.nombre = nombre;
    this.apelido = apellido;
    this.alias = alias;
    this.aliado = aliado;
    this.ataque = ataque;
    //Metodo // 
    this.atacar = function (nombre) {
        console.log (this.nombre + " ataca a  " + nombre + " con un tipo de ataque "  + this.ataque);
    }

    this.viajarOtroUniverso = () => { //Ejemplo de Metodo con Funcion flecha //
        console.log (this.nombre + " viaja a otro universo...");
    }

}
const personaje1 = new Personaje ("Anthony", "Stark", "Iron Man", "War Machine", "Rayo Propulsor");
const personaje2 = new Personaje ("Bruce", "Banner", "Hulk", "Dr. Samson", "Smash" );
console.log (personaje1); 
console.log (personaje2);

personaje1.viajarOtroUniverso ();
personaje1.atacar (personaje2.nombre);