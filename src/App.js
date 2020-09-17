import React from 'react';
import './App.css';

const nEntris = performance && performance.getEntries('navigation')[0]

function App() {
  return (
    <div className="App">
      <h1>Aiwen's Site!</h1>
      {
        performance ?
          <div>
            Load Time: {nEntris.loadEventEnd}
          </div>
          :
          null
      }
    </div>
  );
}

export default App;
