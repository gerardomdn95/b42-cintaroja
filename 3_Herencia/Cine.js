var { nuestroPlaneta, elSembrador } = require('./Documental');
var { yaNoEstoyAqui, sangrePorSangre } = require('./Pelicula');

class Cine {
  constructor(cadena, salas, ubicacion) {
    this.cadena = cadena;
    this.salas = salas;
    this.ubicacion = ubicacion;
  }

  reproducirLargometraje(largometraje) {
    if (largometraje.precio < 80) {
      // Película
      return "Se está reproduciendo " + largometraje.titulo + ", su género es " + largometraje.genero + ", es una película.";
    } else {
      // Documental
      return "Estás viendo el documental " + largometraje.titulo + ", el narrador es " + largometraje.narrador + " y es patrocinado por " + largometraje.patrocinador;
    }
  }
}

var cinepolis = new Cine('Cinepolis', 9, 'Nuevo Toledo');

console.log(cinepolis.reproducirLargometraje(nuestroPlaneta));
console.log(cinepolis.reproducirLargometraje(sangrePorSangre));