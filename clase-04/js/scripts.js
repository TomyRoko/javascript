// function saludar() {
//   console.log("hola mundo");
// }

// saludar();

// saludar();

// function edad(edad) {
//   console.log("tu edad es :" + edad);
// }

// edad(8);

// function suma(num1, num2) {
//   const suma = num1 + num2;
//   console.log("la suma es:" + suma);
// }

// suma(6, 8);

// function resta(num1, num2) {
//   return num1 - num2;
// }

// const resultadoResta = resta(10, 4);

// console.log("el resultado de la resta es: " + resultadoResta);

// const horario = function () {
//   console.log("Hoy es lunes y son las 10am");
// };
// horario();

// const saludar = (nombre) => {
//   console.log("hola " + nombre);

// }

// const saludo = (nombre) => {
//   const mensaje = "¡Hola, " + nombre + "!";
//   return mensaje;
// };

// function sumar(num1, num2, callback) {
//   let resultado = num1 + num2;
//   callback(resultado);
// }

// function mostrarResultado(resultado) {
//   console.log("El resultado de la suma es: " + resultado);
// }

// sumar(3, 7, mostrarResultado);



// function multiplicar(num1, num2, callback) {
//   let resultado = num1 * num2;
//   callback(resultado);
// }
// function mostrarResultado(resultado) {
//   console.log("El resultado de la multiplicación es: " + resultado);
// }
// multiplicar(4, 5, mostrarResultado);

const coches = ["Ford", "Chevrolet", "Toyota"];

function mostrarCoche(coche) {
  console.log("Coche: " + coche);
}

coches.forEach(mostrarCoche);