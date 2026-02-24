// console.log("hola soy la A");

// setTimeout(() => {
//   console.log("hola soy la B");
// }, 2000);

// console.log("hola soy la c");

// console.log("esto va primero");

// setTimeout(() => {
//   console.log("Mensaje....");
// }, 2000);

// async function iniciar() {
//   const resultado = await validar();
//   console.log(resultado);
// }

function validarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Usuario validado");
    }, 2000);
  });
}

function cargarDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos cargados");
    }, 1500);
  });
}

function guardarPerfil() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Perfil guardado");
    }, 1000);
  });
}

async function validar() {
  console.log("Validando...");
  const resultado = await guardarPerfil();
  console.log(resultado);
}

validar();

async function iniciar() {
  const resultado1 = await validarUsuario();
  console.log(resultado1);

  const resultado2 = await cargarDatos();
  console.log(resultado2);

  const resultado3 = await guardarPerfil();
  console.log(resultado3);

  console.log("Session iniciada");
}

iniciar();

function procesarPedido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pedido procesado");
    }, 3000);
  });
}

function validarPago() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pago validado");
    }, 2000);
  });
}

function confirmarPedido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pedido confirmado");
    }, 1000);
  });
}

async function realizarCompra() {
  const resultado1 = await procesarPedido();
  console.log(resultado1);

  const resultado2 = await validarPago();
  console.log(resultado2);

  const resultado3 = await confirmarPedido();
  console.log(resultado3);

  console.log("Compra realizada");
}

realizarCompra();

// fetch("https://fakestoreapi.com/products/1")
//   .then((response) => {
//     console.log(response);

//     return response.json();
//   })
//   .then((datos) => {
//     console.log(datos);
//   });

async function obtenerProducto() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  console.log(response);

  
  const datos = await response.json();
  console.log(datos);
}

obtenerProducto();