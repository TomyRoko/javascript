// if (true) {
//   console.log("Esta condición es verdadera.");
// }
// let num = 1;
// while (num <= 5) {
//   console.log(num);
//   ++num;
// }

// let texto = prompt("Ingresa la palabra sj");
// while (texto != "js") {
//   console.log("Ingresaste: " + texto);
//   texto = prompt("Ingresa la palabra sj");
// }
// console.log("¡Has ingresado la palabra correcta: js!");

// let num2;

// do {
//   num2 = prompt("Ingresa el numero 5");
//   console.log("Ingresaste: " + num2);
// } while (num2 != "5");

// let num3 = 2;
// do {
//   console.log(num3);
//   ++num3;
//   ++num3;
// } while (num3 <= 20);

// let num4 = 2;
// while (num4 <= 20) {
//   console.log(num4);
//   num4 += 2;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let j = 1; j <= 10; j++) {
//   if (j === 5) {
//     continue;
//   } else if (j === 7) {
//     break;
//   }
//   console.log(j);
// }

// let num = 1;

// while (num <= 10) {
//   ++num;
//   if (num === 5) {
//     continue;
//   } else if (num === 8) {
//     break;
//   }
//   console.log(num);
// }

let num1 = 0;

do {
  ++num1;
  if (num1 === 5) {
    continue;
  } else if (num1 === 8) {
    break;
  }
  console.log(num1);
} while (num1 <= 10);
