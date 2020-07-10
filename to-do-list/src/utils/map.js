const paises = ['México', 'Colombia', 'Perú', 'Costa Rica'];
const firebase =
{
  "-MBlI_kBuQwPNkFqF84m": {
      "category": "Cocina",
      "done": false,
      "title": "Hacer el desayuno"
  },
  "-MBlIxgLaziVqfVTfXNC": {
      "category": "Hogar",
      "done": false,
      "title": "Limpiar el auto"
  },
  "-MBlJ4rQqjaKUo2tSxMt": {
      "category": "DEV.F",
      "done": false,
      "title": "Estudiar JS"
  }
}

console.log(Object.keys(firebase));

const nuevo = Object.keys(firebase).map((valor) => console.log(firebase[valor].category));
