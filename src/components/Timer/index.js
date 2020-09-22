import React from 'react';
const Timer = props => {
  const {
    value
  } = props
  return (
    <>
      <h3>Timer</h3>
      <h1>{value}</h1>
    </>
  )
}

export default Timer