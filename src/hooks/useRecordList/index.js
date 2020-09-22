
import { useEffect, useState } from 'react';
const useRecordList = (triggerState, name, leftTime) => {
  const [recordList, setRecordList] = useState([])
  useEffect(() => {
    if (triggerState === 2) {
      const newRecord = {
        name,
        leftTime,
        isNew: true
      }
      setRecordList(prev => prev.concat([newRecord]).sort((a, b) => a.leftTime - b.leftTime))
    }
  }, [triggerState, name, leftTime])
  return recordList
}

export default useRecordList