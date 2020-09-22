import React from 'react';

const InputName = props => {
  const {
    name,
    onChange
  } = props
  return (
    <>
      <h3>你的名字</h3>
      <input value={name} onChange={e => onChange(e.target.value)} />
    </>
  )
}

export default InputName