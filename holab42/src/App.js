// App es un componente
import React from 'react';
import Card from './components/Card';
import barbados from './Barbados_beach.jpg'
import palenque from './palenque.jpg';
import './App.css';

const App = () => {
  const a = 'Chiapas';
  const b = '5';
  const c = 'Palenque';

  // JSX => Implementación a JS
  return (
    <div>
      <h1 className="text-red">Hola React</h1>
      <h2>Mi primer sitio hecho con React</h2>
      <Card image={barbados} title="Barbados" score="3" address="Playa de Barbados" />
      <Card image={palenque} title={a} score={b} address={c} superhost />
    </div>
  );
}

export default App;
