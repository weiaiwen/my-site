import React, { useEffect, useState } from 'react';
import './App.css';

const nEntris = performance && performance.getEntries('navigation')[0]


function App() {
  const [loadTime, setLoadTime] = useState('')
  useEffect(() => {
    const checkTime = setInterval(() => {
      if (nEntris.loadEventEnd) {
        setLoadTime(nEntris.loadEventEnd)
        clearInterval(checkTime)
      }
    }, 500)
  }, [])
  return (
    <div className="App">
      <h1>Aiwen's Site!</h1>
      {
        performance && loadTime ?
          <div>
            Load Time: {loadTime}ms
          </div>
          :
          null
      }
    </div>
  );
}

export default App;
