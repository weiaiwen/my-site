import React from 'react';
import './index.css'

const Trigger = React.memo(props => {
  const {
    triggerState,
    onTrigger
  } = props

  const txtArr = ['开始', '停止', '重新开始']

  return (
    <div
      className="trigger-button"
      onClick={() => onTrigger()}
    >
      {txtArr[triggerState]}
    </div>
  )
})

export default Trigger