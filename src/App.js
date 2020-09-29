import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Trigger, InputName, PageLoadTime, Timer, RecordList } from './components'
import { useCountdown, useRecordList, useLoadTime } from './hooks'
import './App.css';


function App() {
  const [triggerState, setTriggerState] = useState(0)
  const [name, setName] = useState('')
  const { leftTime, target } = useCountdown(triggerState, setTriggerState)
  const warningPercent = useMemo(() => leftTime / target, [leftTime, target]) 
  const color = useMemo(() => `rgb(255, ${255 * warningPercent}, ${255 * warningPercent})`, [warningPercent])
  const recordList = useRecordList(triggerState, name, leftTime, color)
  const loadTime = useLoadTime()
  
  useEffect(() => {
    if (+leftTime === 0) {
      setTimeout(() => {
        alert('太晚了！')
      })
    }
  }, [leftTime])

  const onTrigger = useCallback(() => {
    setTriggerState(prev => {
      switch(prev) {
        case 0: return 1;
        case 1: return 2;
        case 2: return 0;
        default: 
      }
    })
  }, [])

  return (
    <div className="App" style={{ background: color }}>
      <InputName value={name} onChange={setName} />
      <Timer value={leftTime} />
      <Trigger triggerState={triggerState} onTrigger={onTrigger} />
      <PageLoadTime loadTime={loadTime} />
      <RecordList recordList={recordList} />
    </div>
  );
}


export default App;
