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
    color,
  } = record
  return (
    <div className="record">
      {`${index + 1}.\t${name || '无名氏'} - `}
      <span style={{ background: color }}>{leftTime}秒</span>
      {isNew ? ' (The Last)' : ''}
    </div>
  )
}

export default RecordList