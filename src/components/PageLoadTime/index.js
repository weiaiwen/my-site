
import React, { useEffect, useState } from 'react';

const nEntris = performance && performance.getEntries('navigation')[0]

const useLoadTime = () => {
  const [loadTime, setLoadTime] = useState('')
  useEffect(() => {
    if (!nEntris) {
      return
    }
    const checkTime = setInterval(() => {
      if (nEntris.loadEventEnd) {
        setLoadTime(nEntris.loadEventEnd)
        clearInterval(checkTime)
      }
    }, 500)
    return () => clearInterval(checkTime)
  }, [])
  return loadTime
}


const PageLoadTime = () => {
  const loadTime = useLoadTime()
  if (performance && loadTime) {
    return (
      <div className="load-time">
        Page Load Time: {loadTime.toFixed(2)}ms
      </div>
    )
  }
  return null
}

export default PageLoadTime