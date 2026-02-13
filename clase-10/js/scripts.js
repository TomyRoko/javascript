// let [a, b, c] = numeros;
// console.log(a);
// console.log(b);
// console.log(c);

// const producto = {
//     nombre: "mouse",
//     precio: 5000,
//     stock: 10
// };

// let {nombre, precio} = producto;
// console.log(nombre);
// console.log(precio);

// let {mouse, teclado, monitor} = nombre;
// let {5000, 8000, 15000} = precio;
// let {10, 5, 3} = stock;

// console.log(8000)

// const productos = [
//   {nombre: "Mouse", precio: 5000, stock: 10},
//   {nombre: "Teclado", precio: 8000, stock: 5},
//   {nombre: "Monitor", precio: 15000, stock: 3},
// ];

// const [{nombre}, {precio}, {stock}]=productos;

// console.log(precio);
// let producto = {
//   nombre: "Mouse",
//   precio: 5000,
//   stock: 10,
// };

// const {nombre: nombreProducto, precio: precioProducto, stock: stockProducto} = producto;

// console.log(nombreProducto);
// console.log(precioProducto);
// console.log(stockProducto);

// const nombres = ["Ana", "Juan", "Pedro", "Lucía"];

// let [nombre1, nombre2, ...restoNombres] = nombres;
// console.log(nombre1);
// console.log(nombre2);
// console.log(restoNombres);

const notas = [7, 8, 9, 10];

let [...restoNotas] = notas;
function calcularPromedio(...restoNotas) {
  let sumas = 0;
    restoNotas.forEach((nota) => {
    sumas += nota;
    });
    return sumas / restoNotas.length;
};
console.log(calcularPromedio(...notas));
