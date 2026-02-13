const suscribirse = document.querySelector("#btnSaludar");

suscribirse.onclick = function () {
  alert("ya estas suscrito");
};

const cambio = document.querySelector("#titulo");

cambio.addEventListener("click", () => {
  cambio.textContent = "Se cAmbio el titulo";
});

const input = document.querySelector("#nombre");

input.addEventListener("keyup", (event) => {
  console.log(input.value);
});

const boton = document.querySelector("#btnSaludar");
const contenedor = document.querySelector("#contenedor");

boton.addEventListener("click", () => {
  const item = document.createElement("p");
  item.textContent = "item dinemico";
  item.classList.add("item");
  contenedor.appendChild(item);
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("item"))
    event.target.classList.toggle("activo");
  console.log("click en documento");
});


const mayorEdad = (edad) => {
  if (edad >= 18) {
    console.log("Eres mayor de edad");
  }
};


persona.forEach((persona) => {
  console.log(persona.nombre + " tiene " + persona.edad + " años");

});

const  nombre = 