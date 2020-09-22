import React from 'react'
import Record from './Record'

const RecordList = props => {
  const {
    recordList
  } = props
  return (
    <>
    <h3>Record List</h3>
    {
      recordList.map((r, i) => (
        <Record index={i} record={r} key={`${i}-${Math.random()}`}/>
      ))
    }
    </>
  )
}

export default RecordList