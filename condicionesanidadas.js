

let nombreUsuario;
let contrasenia; 

nombreUsuario = prompt ("Ingrese su nombre");

  if (nombreUsuario != ' ') {
     contrasenia = prompt ("Ingrese la contraseña");
     if (contrasenia != ' ') {
      console.log ("Verificando");
    } else {
        alert("Porfavor ingrese una contraseña");
       }
  }
   else { 
    alert ("Porfavor ingrese nombre de usuario");
   }