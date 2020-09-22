import React, { useState } from 'react';
import { Trigger, InputName, PageLoadTime, Timer, RecordList } from './components'
import { useCountdown, useRecordList } from './hooks'
import './App.css';


function App() {
  const [triggerState, setTriggerState] = useState(0)
  const [name, setName] = useState('')
  const { leftTimeMs, targetMs } = useCountdown(triggerState, setTriggerState)
  const leftTime = (leftTimeMs / 1000).toFixed(3)
  const target = (targetMs / 1000).toFixed(3)
  const recordList = useRecordList(triggerState, name, leftTime, target)

  const onTrigger = () => {
    setTriggerState(prev => {
      switch(prev) {
        case 0: return 1;
        case 1: return 2;
        case 2: return 0;
        default: 
      }
    })
  }

  return (
    <div className="App">
      <InputName value={name} onChange={setName} />
      <Timer value={leftTime} />
      <Trigger triggerState={triggerState} onTrigger={onTrigger} />
      <PageLoadTime />
      <RecordList recordList={recordList} />
    </div>
  );
}


export default App;
