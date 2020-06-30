//             0   1    2   3   4
const array = [10, 22, 33, 54, 12];

// Iterar arreglo => Manera imperativa
//       0    ; 0 < 5  ✅         ; 1
//       1    ; 1 < 5  ✅         ; 2
//       ...
//       5    ; 5 < 5 ❌
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Declarativa
const eachArray = array.forEach((value) => console.log(value));
// console.log(eachArray);

// Manera imperativa
// ['0 - 10', '1 - 22', '2 - 33', '3 - 54', '4 - 12']
// const nuevoArreglo = [];
// for (let i = 0; i < array.length; i++) {
//   nuevoArreglo[i] = `${i} - ${array[i]}`;
// }
// console.log(nuevoArreglo);

// Manera declarativa
const nuevoArreglo = array.map((value, index) => `${index} - ${value}`);
console.log(nuevoArreglo);

const paises = ['México', 'Colombia', 'Costa Rica', 'Perú', 'República Dominicana', 'Venezuela'];

// Imperativa
// const nuevoPaises = [];
// let e = 0;
// for (let i = 0; i < paises.length; i++) {
//   if (paises[i].length <= 6) {
//     nuevoPaises[e] = paises[i];
//     e++;
//   }
// }

// Declarativa
const nuevoPaises = paises.filter((value) => value.length <= 6);

console.log(nuevoPaises);