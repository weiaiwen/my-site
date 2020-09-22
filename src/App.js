import React, { useState } from 'react';
import { Trigger, InputName, PageLoadTime, Timer } from './components'
import { useCountdown } from './hooks'
import './App.css';

function App() {
  const [triggerState, setTriggerState] = useState(0)
  const leftTime = useCountdown(triggerState, setTriggerState)
  const [name, setName] = useState('')

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
    </div>
  );
}


export default App;
