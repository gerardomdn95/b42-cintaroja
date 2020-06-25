// Clase

// Las clases inician con mayúscula
class Auto {
  // Método especial => 1ro en ejecutarse
  constructor(color, matricula, motor) {
    this.llantas = 5;
    this.color = color;
    this.matricula = matricula;
    this.motor = motor;
    this.volante = true;
    this.encendido = false;
  }

  // Métodos
  // Setter
  encender() {
    if (!this.encendido) {
      this.encendido = true;
      return "El auto " + this.color + " ha sido encendido y tiene un motor " + this.motor + ".";
    } else {
      return "Debes apagar primero el auto para volver a encenderlo.";
    }
  }

  apagar() {
    if (this.encendido) {
      this.encendido = false;
      return "El auto " + this.color + " ha sido apagado.";
    } else {
      return "Querido usuario, el auto ya está apagado.";
    }
  }

  pintar(nuevoColor) {
    this.color = nuevoColor;
    return "El auto ha sido pintado de color " + this.color;
  }

  // Cambiar motor
  cambiarMotor(nuevoMotor) {
    this.motor = nuevoMotor;
    return "Estás estrenando motor " + this.motor
  }

  // Getters
  obtenerMatricula() {
    return this.matricula;
  }

  // Evaluar si el motor es eléctrico
  // En enunciado devolver todas las características del auto
  // Si el auto es eléctrico, menciona que no necesita gasolina
  obtenerResumen() {
    if (this.motor === "electrico") {
      return "El auto es de color " + this.color + " tiene " + this.llantas + " llantas su matricula es " + this.matricula + " y no necesita gasolina.";
    } else {
      return "Tu motor es de gasolina y su color es " + this.color + " tiene " + this.llantas + " llantas y su matricula es " + this.matricula;
    }
  }
}

//           INSTANCIA de mi clase auto
var miAuto = new Auto("Azul", "ABDHA12", "V4");
var elAuto = new Auto("Rojo", "AHADAZ3", "V6");

// Encender Auto, Apagar, apagar, encender, imprime objeto

console.log(miAuto.encender());
console.log(miAuto.apagar());
console.log(miAuto.apagar());
console.log(miAuto.encender());
console.log(miAuto.obtenerMatricula());
console.log(miAuto.matricula);
console.log(miAuto.cambiarMotor("electrico"));
console.log(miAuto.pintar("blanco"));
console.log(miAuto.obtenerResumen());
console.log(miAuto);
