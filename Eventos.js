// Manera de controlar acciones de usuarios y definir un comportamiento cuando se produzcan // 
// Manejadores de eventos, son funciones asociados // 
// El metodo addEventListener permite definir que evento escuchar sobre cualquier elemento seleccionado // 

//1. Obtenemos el elemento del dom //

const boton = document.getElementById ("botonPrincipal")

// Primera forma // 

function mostrarMensaje () { 
     alert ("Me hiciste click");
}
boton.addEventListener ("click", mostrarMensaje); // Si la funcion la vamos a usar en otro lado tambien //

/* 
boton.addEventListener ("click", () => alert ("Me hiciste click"));  

si la funcion solamente la usamos aca, la declaramos asi */ 

// SEGUNDA FORMA //

const boton2 = document.getElementById('BotonSecundario'); 
boton2.onclick = () => { alert ("ahora hicste click en el boton 2")}; 

// EVENTOS DEL MOUSE // 

function mensaje () {
     console.log ("estas ejecutando sobre el boton feo");
}


const botonFeo = document.getElementById('BotonDescarte');
botonFeo.addEventListener('mousemove', mensaje );

// EVENTOS DEL TECLADO // 


const miInput = document.getElementById ("input1");
miInput.addEventListener ("keydown", ( ) => {
    console.log ("Ejecutaste evento");
} );
 // KEYDOWN si presionas una tecla // 