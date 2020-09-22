import React, { useState } from 'react';
import { Trigger, InputName, PageLoadTime, Timer, RecordList } from './components'
import { useCountdown, useRecordList } from './hooks'
import './App.css';


function App() {
  const [triggerState, setTriggerState] = useState(0)
  const [name, setName] = useState('')
  const { leftTime, target } = useCountdown(triggerState, setTriggerState)
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
