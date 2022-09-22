import React from 'react';
import './App.css';
import './Tweet'
import Tweet from './Tweet';

function App() {
  return (
    <div className="app">
      <Tweet name="Dev Ed" message="This is a random Tweet" likes="25"/>      
      <Tweet name="John Snow" message="I am the true king" likes="5000"/>      
      <Tweet name="Winter is coming" message="I love GOT" likes="50"/>      
    </div>
  );
}

export default App;
