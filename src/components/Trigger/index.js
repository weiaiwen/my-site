import React from 'react';
import './index.css'

const Trigger = props => {
  const {
    triggerState,
    onTrigger
  } = props

  const txtArr = ['START', 'STOP', 'RESTART']

  return (
    <div
      className="trigger-button"
      onTouchStart={() => onTrigger()}
    >
      {txtArr[triggerState]}
    </div>
  )
}

export default Trigger