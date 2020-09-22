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
    isNew
  } = record
  return (
    <div className="record">
      {`${index + 1}.${name} - ${leftTime}${isNew ? ' (The Last)' : ''}`}
    </div>
  )
}

export default RecordList