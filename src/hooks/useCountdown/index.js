import { useEffect, useRef, useState } from 'react'

let raf
let targetMs
let startTime

const useCountdown = (triggerState, setTriggerState) => {
  const [leftTimeMs, setLeftTimeMs] = useState(0)
  const _triggerState = useRef(triggerState)

  useEffect(() => {
    _triggerState.current = triggerState
    const rafFunc = () => {
      const diff = Date.now() - startTime
      const gap = targetMs - diff
      if (_triggerState.current !== 1) {
        cancelAnimationFrame(raf)
        return
      }
      if (gap >= 0) {
        setLeftTimeMs(gap)
        requestAnimationFrame(rafFunc)
      } else {
        setLeftTimeMs(0)
        setTriggerState(2)
        cancelAnimationFrame(raf)
      }
    }
    
    if (triggerState === 1) {
      startTime = Date.now()
      raf = requestAnimationFrame(rafFunc)
    } else if (triggerState === 0) {
      targetMs = parseInt(Math.random() * 2000 + 4000)
      setLeftTimeMs(targetMs)
      if (raf) {
        cancelAnimationFrame(raf)
      }
    }
    return () => raf && cancelAnimationFrame(raf)
  }, [triggerState, setTriggerState])

  return {
    leftTimeMs,
    targetMs
  }
}

export default useCountdown