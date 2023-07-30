// permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexion con el serviro, de manera de preservar informacion de la aplicacion //
// dos tipos de storage, localStorage y sessionStorage //

let miNombre = "Agustin";

localStorage.setItem ("nombre", miNombre); // Guardar elemento en el local Storage//

const nombreObtenido = localStorage.getItem ("nombre"); // Obtener elemento de localStorage //
console.log (nombreObtenido);
// LA INFORMACION PERSISTE // 

// DIFERENCIA CON SESSION STORAGE, LA INFORMACION SOLAMENTE PERSISTE EN LA SESION //

let unaClave = 1234;
sessionStorage.setItem("clave", unaClave); // El almacenamiento ocurre en session //


// STORAGE INICIO DE SESION 
// Obtener el formulario y agregar un evento 'submit'
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de usuario y contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

 // Validar el usuario y contraseña (solo para fines de demostración)
  if (username === 'usuario' && password === 'contrasena') {
   //  Guardar el estado de inicio de sesión en sessionStorage
    sessionStorage.setItem('loggedIn', 'true');

  // Redireccionar a la página de inicio después de iniciar sesión
    window.location.href = 'inicio.html';
  } else {
    alert('Usuario o contraseña incorrectos. Inténtalo nuevamente.');
  }
}); //

// SE PUEDE ELIMINAR VALORES DEL STORAGE //

localStorage.removeItem ("clave");

// remover todos los elementos //
