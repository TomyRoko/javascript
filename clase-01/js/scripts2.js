console.log(8 > 5);
console.log(4 < 2);

let edad = 25;
let mayorDeEdad = 18;
console.log(edad >= mayorDeEdad);

if (edad >= mayorDeEdad) {
  console.log("Eres mayor de edad");
}

let temperatura = 30;

if (temperatura < 5) {
  let mensaje = "Hace frío";
  console.log(mensaje);
}

let nota = 5;

if (nota >= 5) {
  console.log("Has aprobado");
} else {
  console.log("Has suspendido");
}
let edad2 = 70;
let niño = 12;
let adolescente = 17;
let adulto = 18;


if (edad2 <= niño) {
  console.log("Eres un niño");
} else if (edad2 <= adolescente) {
  console.log("Eres un adolescente");
} else if (edad2 >= adulto) {
  console.log("Eres un adulto");
}

let numero = 445332;
if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}   
let color = "rojo";
switch (color) {
  case "rojo":
    console.log("El color es rojo");    
    break;
    case "azul":
    console.log("El color es azul"); 
    break;
    case "verde":
    console.log("El color es verde");    
    break;
    case "amarillo":
    console.log("El color es amarillo");    
    break;
    default:
    console.log("Color no reconocido");
    break;
}
