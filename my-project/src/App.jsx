// src/App.js
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ backgroundColor: '#333', width: '100vh', height: '100vh' ,display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
      <Counter />
    </div>
  );
}

export default App;
