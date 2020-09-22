import React from 'react';
import './index.css'
const Timer = props => {
  const {
    value
  } = props
  return (
    <div className="timer">
      <span className="txt">倒计时</span>
      {value}
      <span className="txt">秒</span>
    </div>
  )
}

export default Timer