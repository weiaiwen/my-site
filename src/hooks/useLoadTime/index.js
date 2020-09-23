
import { useEffect, useState } from 'react'

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

export default useLoadTime