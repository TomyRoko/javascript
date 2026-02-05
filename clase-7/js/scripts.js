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

// const parrafos = document.getElementsByTagName("p");

// for (let i = 0; i < parrafos.length; i++) {
//     parrafos[i].style.color = "green";
// }

const elementoTitulo = document.querySelector("h1");

elementoTitulo.textContent = "Titulo modificado con querySelector";

const primerParrafo = document.querySelector("p");

primerParrafo.textContent = "Primer párrafo modificado con querySelector";

const parrafosDescripcion = document.querySelectorAll("p");
parrafosDescripcion.forEach((element) => {
  element.textContent = "Párrafo modificado con querySelectorAll";
});

const h2 = document.querySelector("h2");

const id = h2.getAttribute("id");

console.log(id);

h2.setAttribute("class", "subtitulo-clase");

h2.removeAttribute("id");

console.log(h2.value);


