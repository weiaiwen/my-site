import React, { useEffect, useState } from 'react';
import './App.css';

const nEntris = performance && performance.getEntries('navigation')[0]

let cdInterval
let targetNum = 0

function App() {
  const [loadTime, setLoadTime] = useState('')
  const [cd, setCd] = useState(null)
  const [cdStatus, setCdStatus] = useState(-1)
  const [record, setRecord] = useState([])
  const [name, setName] = useState('')
  const [red, setRed] = useState(0)

  useEffect(() => {
    targetNum = parseInt(Math.random() * 1000)
    setCd(targetNum)
    const checkTime = setInterval(() => {
      if (nEntris.loadEventEnd) {
        setLoadTime(nEntris.loadEventEnd)
        clearInterval(checkTime)
      }
    }, 500)
  }, [])

  const initFunc = status => {
    setCdStatus(status)
    targetNum = parseInt(Math.random() * 1000)
    setCd(targetNum)
    setRed(0)
  }

  useEffect(() => {
    if (cdStatus === -1) {
      return
    }
    if (cdStatus) {
      cdInterval = setInterval(() => {
        setCd(prev => prev - 1)
      }, 10);
    } else {
      setRecord(prev => [...prev.map(r => ({...r, isNew: false})), { red, cd, name, isNew: true }].sort((a, b) => a.cd - b.cd))
      clearInterval(cdInterval)
      initFunc(false)
    }
  }, [cdStatus])

  useEffect(() => {
    if (cd === null || !cdStatus || cdStatus === -1) {
      return
    }
    if (+cd > 0) {
      const color = ((targetNum - cd) / targetNum) * 255
      setRed(color)
    } else if (cd === 0) {
      clearInterval(cdInterval)
      setTimeout(() => {
        alert('TIMEOUT!!!')
      }, 10)
      initFunc(-1)
    }
  }, [cd, cdStatus])

  return (
    <div className="App" style={{ background: `rgba(255, ${255 - red}, ${255 - red})` }}>
      {
        performance && loadTime ?
          <div className="load-time">
            Page Load Time: {loadTime.toFixed(2)}ms
          </div>
          :
          null
      }
      <h3>Your Name</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h3>Count Down Game</h3>
      <h1>{cd}</h1>
      <div
        className="cd-button"
        onClick={() => setCdStatus(prev => prev === -1 ? true : !prev)}
      >
        {(!cdStatus || cdStatus === -1) ? 'Start' : 'Stop'}
      </div>
      <h3>Record</h3>
      <div className="record">
        {
          record.length ?
            record.map((r, i) => (
              <h3 key={i}>
                {i + 1}. {r.name || 'No Name'} - <span style={{ color: `rgba(${r.red}, 0, 0)` }}>{r.cd}</span> {r.isNew ? '(The Last)' : ''}
              </h3>
            )) :
            null
        }
      </div>
    </div>
  );
}

export default App;
