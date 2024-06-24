
import React from 'react';
import './App.css';
import ArtistInfo from './ArtistInfo'; // Import do componente ArtistInfo aqui

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Busca de Informações de Artista</h1>
      </header>
      <main>
        <ArtistInfo />
      </main>
    </div>
  );
}

export default App;
