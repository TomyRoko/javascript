const form = document.getElementById("form-contacto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("#nombre").value;
  const correo = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  const data = {
    nombre: input,
    email: correo,
    mensaje: mensaje,
  };
    console.log(data);

});
