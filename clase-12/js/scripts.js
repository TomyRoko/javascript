// setTimeout(() => {
//   console.log("Esto se muestra después de 3 segundos");
// }, 3000);

// console.log("Esto se muestra antes de los 3 segundos");

// function saludadr(callback) {
//     console.log("Hola, soy una función que saluda");
//     callback();
// }

// const hola = function() {
//     console.log("Hola, soy un callback");
// }

// saludadr(hola);

// function saludar(callback) {
//   setTimeout(() => {
//     callback();
//   }, 3000);
// }

// const hola = function () {
//   console.log("Hola");
// };

// saludar(hola);

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const exito = true;
//     if (exito) {
//       resolve("La promesa se resolvió con éxito");
//     } else {
//       reject("La promesa se rechazó");
//     }
//   }, 3000);
// });

// promesa
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// console.log(promesa);

const comprobador = new Promise((resolve, reject) => {
  const numero = Math.random();
  if (numero > 0.5) {
    resolve("El número es mayor que 0.5: " + numero);
  } else {
    reject("El número es menor o igual a 0.5: " + numero);
  }
});

comprobador
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  })
    .finally(() => {
    console.log("Esto se ejecuta siempre, independientemente del resultado");
  });


