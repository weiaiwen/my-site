import React from 'react'
import Record from './Record'

const RecordList = React.memo(props => {
  const {
    recordList
  } = props
  
  return (
    <>
    <h3>纪录</h3>
    {
      recordList.map((r, i) => (
        <Record index={i} record={r} key={`${i}-${Math.random()}`}/>
      ))
    }
    </>
  )
})

export default RecordList