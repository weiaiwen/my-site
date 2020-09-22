import React from 'react'
import './index.css'

const RecordList = props => {
  const {
    index,
    record
  } = props
  const {
    name,
    leftTime,
    isNew,
    target
  } = record
  return (
    <div className="record">
      {`${index + 1}.\t${name || 'NO NAME'} - ${leftTime}${isNew ? ' (The Last)' : ''}`}
    </div>
  )
}

export default RecordList