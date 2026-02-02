const titulo = document.getElementById("titulo");

console.log(titulo.textContent);

titulo.textContent = "Pagina de motos";

const subtitulo = document.getElementById("subtitulo");

console.log(subtitulo.textContent);

subtitulo.textContent = "Subtitulo de motos";

const descripciones = document.getElementsByClassName("descripcion");

console.log(descripciones.length);

descripciones[0].textContent = "Descripcion de autos";
descripciones[1].textContent = "Descripcion de motos";

console.log(descripciones[0].textContent);
console.log(descripciones[1].textContent);

for (let i = 0; i < descripciones.length; i++) {
console.log(descripciones[i]);    
}

descripciones[0].style.color = "red";
descripciones[0].style.fontSize = "20px";
descripciones[1].style.color = "blue";
descripciones[1].style.fontSize = "30px";

descripciones[0].style.backgroundColor = "yellow";
descripciones[1].style.backgroundColor = "lightgrey";


