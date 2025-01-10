import React from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm/WeatherForm';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1>Weather App</h1>
        </header>
        <WeatherForm />
      </div>
    </div>
  );
}

export default App;
