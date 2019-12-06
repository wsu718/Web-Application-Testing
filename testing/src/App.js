import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);

  const addStrike = () => {
    if (strikes === 2) {
      resetCount();
      incrementOuts();
    } else {
      setStrikes(strikes + 1)
    }
  }

  const addBall = () => {
    if (balls === 3) {
      resetCount();
    } else {
      setBalls(balls + 1)
    }
  }

  const foul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    }
  }

  const hit = () => {
    resetCount();
  }

  const resetCount = () => {
    setBalls(0)
    setStrikes(0)
  }

  const incrementOuts = () => {
    if (outs < 2) {
      setOuts(outs + 1)
    }
    else {
      setOuts(0);
    }
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} outs={outs} />
      <Dashboard addStrike={addStrike} addBall={addBall} hit={hit} foul={foul} />
    </div>
  );
}

export default App;
