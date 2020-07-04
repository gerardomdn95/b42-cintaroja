const request = require('request');

const getAsteroids = (year, month, day) => {
  const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&end_date=${year}-${month}-${day}&api_key=DEMO_KEY`;

  return new Promise((resolve, reject) => {
    request(URL, (error, response, body) => {
      const json = JSON.parse(body)

      if(!error && response.statusCode === 200) {
        // Aquí no hay error
        const asteroids = json.near_earth_objects[`${year}-${month}-${day}`];
        const res = asteroids.map((value) => `${value.id}: ${value.name} ${value.is_potentially_hazardous_asteroid}`)
        // Filtrar elementos peligrosos
        // const res = asteroids.filter((value) => value.is_potentially_hazardous_asteroid);
        // const res2 = res.map((value) => `${value.id}: ${value.name} ${value.is_potentially_hazardous_asteroid}`)
        resolve(res);
      } else {
        // handler de errores
        switch(response.statusCode) {
          case 400:
            reject(`${json.http_error} ${json.error_message}`);
            break;
          default:
            reject('Ocurrió un error desconocido');
        }
      }
    })
  });
}

getAsteroids('2020', '06', '24')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  // [
  // 4534354: {
  // name: "Lgdx"
  // dangerous: true
  // }
    // 4534354: {
  // name: "Lgdx"
  // dangerous: true
  // }
    // 4534354: {
  // name: "Lgdx"
  // dangerous: true
  // }
  // ]