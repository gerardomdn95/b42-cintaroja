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