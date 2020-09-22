import React from 'react'
import Record from './Record'

const RecordList = props => {
  const {
    recordList
  } = props
  return (
    <>
    {
      recordList.map((r, i) => (
        <Record index={i} record={r} key={`${i}-${Math.random()}`}/>
      ))
    }
    </>
  )
}

export default RecordList