import React, { useEffect, useState } from 'react';
import './App.css';

const nEntris = performance && performance.getEntries('navigation')[0]

let cdInterval

function App() {
  const [loadTime, setLoadTime] = useState('')
  const [cd, setCd] = useState(0)
  const [cdStatus, setCdStatus] = useState(-1)
  const [record, setRecord] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    setCd(parseInt(Math.random() * 8) + 3)
    const checkTime = setInterval(() => {
      if (nEntris.loadEventEnd) {
        setLoadTime(nEntris.loadEventEnd)
        clearInterval(checkTime)
      }
    }, 500)
  }, [])

  useEffect(() => {
    if (cdStatus === -1) {
      return
    }
    if (cdStatus) {
      cdInterval = setInterval(() => {
        setCd(prev => (prev - 0.01).toFixed(2))
      }, 10);
    } else {
      setRecord(prev => [...prev, { cd, name }].sort((a, b) => Math.abs(a.cd) - Math.abs(b.cd)))
      setCd(parseInt(Math.random() * 8) + 3)
      clearInterval(cdInterval)
    }
  }, [cdStatus])
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
      <h2>Your Name</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h2>Little Game</h2>
      <div>{cd}</div>
      <div onClick={() => setCdStatus(prev => prev === -1 ? true : !prev)}>{(!cdStatus || cdStatus === -1) ? 'Start' : 'Stop'}</div>
      <h2>Record</h2>
      {
        record.length ?
          record.map(r => <h3>{r.cd} - {r.name || 'No Name'}</h3>) :
          null
      }
    </div>
  );
}

export default App;
