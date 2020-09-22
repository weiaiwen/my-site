import React from 'react';

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