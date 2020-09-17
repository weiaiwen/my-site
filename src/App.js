import React, { useEffect, useState } from 'react';
import './App.css';

const nEntris = performance && performance.getEntries('navigation')[0]

function App() {
  const [loadTime, setLoadTime] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setLoadTime(nEntris.loadEventEnd)
    })
  }, [])
  return (
    <div className="App">
      <h1>Aiwen's Site!</h1>
      {
        performance && loadTime ?
          <div>
            Load Time: {loadTime / 1000}s
          </div>
          :
          null
      }
    </div>
  );
}

export default App;
