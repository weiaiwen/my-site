
import { useEffect, useState, useRef } from 'react';
const useRecordList = (triggerState, name, leftTime, target) => {
  const [recordList, setRecordList] = useState([])
  const _triggerState = useRef(name)
  
  useEffect(() => {
    if (triggerState === 2 && _triggerState.current !== triggerState && +leftTime !== 0) {
      const newRecord = {
        name,
        leftTime,
        isNew: true,
        target
      }
      setRecordList(prev => prev
        .map(p => ({ ...p, isNew: false }))
        .concat([newRecord])
        .sort((a, b) => a.leftTime - b.leftTime))
    }
    _triggerState.current = triggerState
  }, [triggerState, name, leftTime, target])
  
  return recordList
}

export default useRecordList