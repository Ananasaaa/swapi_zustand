import './App.css';
import React, { useEffect } from 'react';
import useStore from './store';
import Footer from './Footer';

function App() {
  const { planets, loading, error, fetchPlanets, clearPlanets } = useStore(); // Достаем из состояния

  useEffect(() => {
    fetchPlanets(); 
  }, [fetchPlanets]);

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      {loading && <p>Loading planets...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {planets.map((planet) => (
            <li key={planet.name}>
              <strong>{planet.name}</strong> - Population: {planet.population}
            </li>
          ))}
        </ul>
      )}
      <Footer onClear={clearPlanets} />
    </div>
  );
}

export default App;
