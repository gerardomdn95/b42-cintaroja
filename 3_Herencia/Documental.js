var { Largometraje } = require("./Largometraje");

class Documental extends Largometraje {
  constructor(titulo, duracion, director, narrador, patrocinador) {
    super(titulo, duracion, director);
    this.precio = 80;
    this.narrador = narrador;
    this.patrocinador = patrocinador;
  }

}

var nuestroPlaneta = new Documental("Nuestro Planeta", 60, "Tommy", "Jaime Flores", "NatGeo");
var elSembrador = new Documental("El sembrador", 65, "Ivette Mendoza", "Luis Miguel", "Netflix");

console.log("Se ejecutó Documental.js");
module.exports = { nuestroPlaneta, elSembrador };
