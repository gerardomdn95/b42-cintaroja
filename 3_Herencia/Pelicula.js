var { Largometraje } = require('./Largometraje');

// Subclase
class Pelicula extends Largometraje {
  constructor(titulo, duracion, director, genero) {
    super(titulo, duracion, director);
    this.precio = 50;
    this.genero = genero;
  }
}

var yaNoEstoyAqui = new Pelicula("Ya No Estoy Aquí", 180, "Desconocido", "Drama");
var sangrePorSangre = new Pelicula("Sangre por sangre", 120, "Desconocido", "Acción");

module.exports = { yaNoEstoyAqui, sangrePorSangre }