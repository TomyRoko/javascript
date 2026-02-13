function obtenerNumero(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero == 7) {
        resolve(numero);
      } else if (numero == 8) {
        resolve(numero);
      } else {
        reject("Error, numero incorrecto");
      }
    }, 2000);
  });
}

obtenerNumero(8)
  .then(function (mensaje) {
    console.log("THEN:", mensaje);
  })
  .catch((error) => console.log(error));

async function ejecutar() {
  try {
    const resultado = await obtenerNumero(8);
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

ejecutar();

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ datos: [1, 2, 3] });
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log("Datos obtenidos:", data);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  } finally {
    console.log("Operación finalizada");
  }
}

fetchData();
