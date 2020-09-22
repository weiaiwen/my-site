import React from 'react';
import './index.css'
const Timer = props => {
  const {
    value
  } = props
  return (
    <>
      <h3>倒计时</h3>
      <h1>
        {value}
        <span className="unit">秒</span>
      </h1>
    </>
  )
}

export default Timer