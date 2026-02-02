// const nombres = ["Ana", "Luis", "Carlos"];

// const dias = ["Lunes", "Martes", "Miércoles"];

// const vacio = [];

// const numeros = [1, 2, 3, 4, 5];

// console.log(nombres[0]);
// console.log(nombres[1]);
// nombres[2] = "María";

// console.log(nombres.length);
// console.log(nombres[nombres.length - 1]);

// const coches = [];

// coches.push("Toyota");
// coches.push("Honda");
// coches.push("Ford");

// coches.pop();

// coches.unshift("Chevrolet");
// coches.shift();


// console.log(coches);

// if (nombres.length > 15) {
//     console.log (coches) ;
// } 

// const numeros = [25, 30, 15, 40, 12, 13];
// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] >= 15)     {
//         console.log(numeros[i]);
//     }
// }

// const coches = ["Ford", "Chevrolet", "Toyota"];

// coches.forEach(coche => console.log("Coche: " + coche));

const numeros = [10, 20, 30, 40, 50];

numeros.map(numero => console.log( 3 * numero));

numeros.map(numero => console.log(numero = - numero));


const edades = [1, 2, 3, 4, 5, 18, 22, 15,  30, 25];

const mayoresDe10 = edades.filter(edad => edad > 10);

const mayoresDeEdad = edades.filter(edad => edad >= 18);

