import React from 'react';
const Timer = props => {
  const {
    value
  } = props
  return (
    <>
      <h3>Timer</h3>
      <h1>{(value / 1000).toFixed(2)}</h1>
    </>
  )
}

export default Timer