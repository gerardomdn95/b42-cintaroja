const request = require('request');
const { Banda } = require('./Banda');

const obtenBanda = (banda) => {
  const URL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${banda}`;
  request(URL, (error, response, body) => {
    if (error) {
      console.log('Ocurrió un error');
    } else {
      // console.log('No hay error');
      // console.log(response.statusCode);
      // Parse JSON
      const res = JSON.parse(body);
      if (res.artists !== null) {
        // console.log(res.artists[0].strArtist);
        // console.log(res.artists[0].strWebsite);
        // console.log(res.artists[0].strBiographyES);
        const { strArtist, strWebsite, intFormedYear, strGenre } = res.artists[0];
        const nuevaBanda = new Banda(
          strArtist,
          strWebsite,
          intFormedYear,
          strGenre);
        console.log(nuevaBanda);
      } else {
        console.log(`No encontré a ${banda}, o está mal escrito.`);
      }
    }
  });
}

obtenBanda('Juan Gabriel');
obtenBanda('Morat');
obtenBanda('Los Temerarios');
obtenBanda('Queen');