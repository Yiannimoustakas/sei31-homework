import React from 'react';
import '../App.css'
import background from '../randmbackground.jpg'
import RickAndMortySearch from './RickAndMortySearch'

function App() {
  return (
    <div className="App">
      <img src={background} className="img-background" alt="" />
        <div className="container">
          <h1>Rick and Morty Search</h1>
          <RickAndMortySearch/>
        </div>
    </div>
  );
}

export default App;
