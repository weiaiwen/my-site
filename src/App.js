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
  const [red, setRed] = useState(0)

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
      const finalCD = cd
      cdInterval = setInterval(() => {
        setCd(prev => {
          if (prev > 0) {
            const color = ((finalCD - prev) / finalCD) * 255
            setRed(color)
          } else {
            setRed(255)
          }
          return (prev - 0.01).toFixed(2)
        })
      }, 10);
    } else {
      setRecord(prev => [...prev, { cd, name, red }].sort((a, b) => Math.abs(a.cd) - Math.abs(b.cd)))
      setRed(0)
      setCd(parseInt(Math.random() * 8) + 3)
      clearInterval(cdInterval)
    }
  }, [cdStatus])
  return (
    <div className="App" style={{ background: `rgba(255, ${255 - red}, ${255 - red})` }}>
      {
        performance && loadTime ?
          <div>
            Page Load Time: {loadTime}ms
          </div>
          :
          null
      }
      <h3>Your Name</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h3>Count Down Game</h3>
      <h1 style={{ color: `rgb(${red}, 0, 0)` }}>{cd}</h1>
      <div
        className="cd-button"
        onClick={() => setCdStatus(prev => prev === -1 ? true : !prev)}
      >
        {(!cdStatus || cdStatus === -1) ? 'Start' : 'Stop'}
      </div>
      <h3>Record</h3>
      {
        record.length ?
          record.map((r, i) => <h3 key={i}>{i + 1}. {r.name || 'No Name'} - <span style={{ color: `rgba(${r.red}, 0, 0)` }}>{r.cd}</span></h3>) :
          null
      }
    </div>
  );
}

export default App;
