import React from 'react';
import MainContainer from './containers/MainContainer';
import AboutContainer from './containers/AboutContainer';
import CreateContainer from './containers/CreateContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route exact path="/create" component={CreateContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
