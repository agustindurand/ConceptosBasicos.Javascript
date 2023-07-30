
const botonRegistrar = document.querySelector ("#registrar");

botonRegistrar.addEventListener("click", (e) => {
    e.preventDefault ();
    registrarUsuario ();
    alert("Usuario Registrado");
});

 function registrarUsuario () {
     const nuevaCuenta = new Cuenta (inputTitular.value, inputContacto.value)
 }