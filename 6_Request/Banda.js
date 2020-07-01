class Banda {
  constructor(nombre, web, anio, genero) {
    // No encontrado
    this.nombre = nombre ? nombre : 'Nombre no encontrado';
    this.web = web ? web : 'Web no encontrada';
    this.anio = anio ? anio : 'Fundación no encontrada';
    this.genero = genero ? genero : 'Género no encontrado';
  }
}

module.exports = { Banda };

// Operadores ternarios
// const edad = 24;

// console.log(edad >= 18);
// const resultado = null ? 'Eres mayor de edad' : 'Eres menor de edad';
// console.log(resultado);


// if (edad >= 18) {
//   console.log('Eres mayor de edad');
// } else {
//   console.log('Eres menor de edad');
// }