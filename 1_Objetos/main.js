// Función
// Una función que determine el área de un trapecio

// Trapecio
// a = (B+b)/2 * h
//                Parámetros
function trapecio(B, b, h) {
  var area = ((B + b) / 2) * h;
  return area;
}


// Objetos literales
var perro = {
  // llave: valor
  nombre: "Ayudante de Santa",
  edad: 30,
  vivo: true,
  raza: "Galgo",
  juguetes: ["Pelota", "Peluche", "Hueso", "Mordedera"],
  familia: {
    padre: "Homero",
    madre: "Marge",
    hermano: "Bart",
    hermana: "Lisa"
  },

  // Métodos      parametro
  juega: function(juguete) {
    // console.log(this.nombre);
    if(juguete < 4 && juguete >= 0) {
      return this.nombre + " está jugando con " + this.juguetes[juguete];
    } else {
      return "El perro no encontró el juguete";
    }
  }
}

// console.log(perro);
// console.log(perro.juguetes[0]);
// console.log(perro.familia.padre);
console.log(perro.juega(1));
console.log(perro.juega(9));

//   ______
//  l     l
//  l     l   => z
//  -------

//         ______
//  x =>  l      l
//  y =>  l      l   => z
//        -------