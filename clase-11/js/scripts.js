localStorage.setItem("ciudad", "Madrid");

const ciudad = localStorage.getItem("ciudad");

console.log(ciudad);

localStorage.setItem("moneda", "euro");

localStorage.removeItem("moneda");

const moneda = localStorage.getItem("moneda");

console.log(localStorage.getItem("moneda"));

// const input = document.querySelector("#agregar-nombre");

// input.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const input = document.querySelector("#nombre");
//   localStorage.setItem("usuario", input.value);
//   console.log(input.value);

// });

// const form = document.querySelector("#agregar-nombre");

// form.addEventListener("submit", (event) =>{

//     event.preventDefault();

//     const input = document.querySelector("#nombre");

//     localStorage.setItem("nombre" , input.value);

//     console.log(input.value);
// });

// const form = document.querySelector("#nombre");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const input = document.querySelector("#nombre"); // ← manca #

//   console.log(input.value);

//   localStorage.setItem("nombre", input.value); // ← setItemItem → setItem
// });

sessionStorage.setItem("ciudad", "Madrid");

const ciudadSession = sessionStorage.getItem("ciudad");

console.log(ciudadSession);

const barbara = {
  nombre: "Barbara",
  edad: 30,
  ciudad: "Madrid",
  titulo: "Desarrolladora web",
};

localStorage.setItem("barbara", JSON.stringify(barbara));

const personaRecuperada = localStorage.getItem("barbara");
const personaObjeto = JSON.parse(personaRecuperada);

console.log(personaObjeto.edad);


// setTimeout(() => {
//   console.log("Esto se muestra después de 3 segundos");
// }, 3000);

// console.log("Esto se muestra antes de los 3 segundos");

