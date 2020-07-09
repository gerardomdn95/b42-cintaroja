// Hooks
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import GifCard from '../components/GifCard';
import SearchInput from '../components/SearchInput';
import axios from 'axios';

const MainContainer = () => {
  // Estados del componente
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getGifs = (query) => {
    query = query === undefined ? 'demo' : query;
    setLoading(true);
    const URI = `https://api.giphy.com/v1/gifs/search?api_key=AwF7TLgmC9XUe03VlTUMbaHUOgCS1S0u&q=${query}&limit=5`;
    axios.get(URI)
      .then((res) => {
        setGifs(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      })
  }

  // Componente ha iniciado
  useEffect(() => {
    getGifs();
  }, []);

  // JSX
  return (
    <div>
      <Navbar />
      <div className="container">
        <SearchInput getGifs={getGifs} />
        {loading
          ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )
          : null}
        {gifs.map((gif) => (
          <GifCard
            key={gif.id}
            img={gif.images.downsized_large.url}
            title={gif.title}
            website={gif.source_post_url}
            description={gif.trending_datetime}
          />
        ))}
      </div>
    </div>
  )
}

// [{}, {}, {}, {}, {}]

export default MainContainer;
