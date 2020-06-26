// Clase Mascota => Super Clase / Clase Padre
class Mascota {
  constructor(nombre, patas) {
    this.nombre = nombre;
    this.patas = patas;
    this.cerebro = true;
  }

  // Métodos
  alimentarse() {
    return this.nombre + " se está alimentando."
  }
}

// Subclase de Mascota
class Perro extends Mascota {
  // Método constructor
  constructor(nombre, patas, cola, raza) {
    // Super Constructor
    super(nombre, patas);
    this.ladra = true;
    this.cola = cola;
    this.raza = raza;
  }

  truco() {
    return this.nombre + " está dando la pata";
  }
}

// Subclase de Mascota
class Serpiente extends Mascota {
  constructor(nombre, color) {
    super(nombre, 0);
    this.color = color;
    this.veneno = false;
  }

  morder() {
    return this.nombre + " te mordió";
  }

  mudarPiel() {
    return this.nombre + " ha mudado su piel " + this.color;
  }
}

var meteoro = new Perro('meteoro', 4, true, "salchicha");
var lolo = new Mascota("Lolo", 4);
var snippet = new Serpiente("Snippet", "negra");

console.log(meteoro);
console.log(meteoro.truco());
console.log(lolo.alimentarse());
console.log(snippet);