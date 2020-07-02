// Es algo que no sbaemos si sucederá
// Promesa está en el aire (Pending)
// 24 de Junio 2021
// Cumple => 📱  (resuelta)
// No cumple => Razón  (rechazada)
//              - No tengo dinero
//              - Se me olvidó
//              - No lo encontré
//              - ¿Hoy es tu cumple?

const promesaCumple = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.round(Math.random() * 100);
    if(number > 50) {
      resolve("📱");
    } else if(number < 10) {
      reject("No tengo dinero");
    } else {
      reject("Se me olvidó");
    }
  }, 5000);
});

// .then() es el método que se ejecuta cuando la promesa se cumple
// .catch() es el método que se ejecuta cuando la promesa no se cumple

promesaCumple
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Número aleatorio
// 0 => 1 (1 => 100%, 0 => 0%)

// console.log(Math.round(Math.random() * 100));

// console.log(Math.floor(24.5651));
// console.log(Math.ceil(24.5651));
// console.log(Math.round(24.3));