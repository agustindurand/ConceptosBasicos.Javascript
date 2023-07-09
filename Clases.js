// Es el modelo del objeto //
// se conoce como Plantilla //
// Son equivalentes al empleo de la funcion constructora y permite definir distintos tipos de metodos //

class Personaje {
    nombre; 
    apelido; 
    alias; 
    aliado;
    ataque;
   
   constructor (nombre, apellido, alias, aliado, ataque) { 
   this.nombre = nombre;
   this.apelido = apellido;
   this.alias = alias;
   this.aliado = aliado;
   this.ataque = ataque;

}

 atacar = function (nombre) {
    console.log (this.nombre + " ataca a  " + nombre + " con un tipo de ataque "  + this.ataque);
}


}