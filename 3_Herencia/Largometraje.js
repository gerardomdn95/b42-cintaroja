class Largometraje {
  constructor(titulo, duracion, director) {
    this.titulo = titulo;
    this.duracion = duracion + " minutos";
    this.director = director;
  }
}

// var ejemplo = new Largometraje("Ejemplo", 120, "Desconocido");
// console.log(ejemplo);

// Destructuración de objeto
// var { titulo, duracion, director } = ejemplo;
// console.log(titulo);
// console.log(duracion);
//console.log(director);

console.log("Se ejecutó Largometraje.js");
module.exports = { Largometraje };
