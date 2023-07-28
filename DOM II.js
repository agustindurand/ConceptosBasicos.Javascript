// getElementsByClassName sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificacion//

const misTextos = document.getElementsByClassName ("uno");
 // Me devuelve una lista de elementos // 

 if (misTextos.length > 0) {
    console.log (misTextos);
 }

misTextos[0]. classList.add ("red");

// getElementsbytagname, utiliza el nombre de etiqueta como identificacion del elemento HTML // 
// siempre va a devolver un array vacio o con datos // 

const divs = document.getElementsByTagName("div"); 

if (divs.length > 0) {
    console.log (divs);
    // podemos ver los hijos del elemento //
    console.log (divs[0].children);
    console.log (divs[1].children);
}

// Inner Text permite modificar el contenido del texto desde javascript // 

const miH = document.getElementById ()