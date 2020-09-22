import { useEffect, useRef, useState } from 'react'

let raf

const useCountdown = (triggerState, setTriggerState) => {
  const [leftTimeMs, setLeftTimeMs] = useState(-1)
  const _triggerState = useRef(triggerState)
  const targetMs = useRef(0)
  const startTime = useRef(0)

  useEffect(() => {
    _triggerState.current = triggerState
    const rafFunc = () => {
      const diff = Date.now() - startTime.current
      const gap = targetMs.current - diff
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
      startTime.current = Date.now()
      raf = requestAnimationFrame(rafFunc)
    } else if (triggerState === 0) {
      targetMs.current = parseInt(Math.random() * 2000 + 4000)
      setLeftTimeMs(targetMs.current)
      if (raf) {
        cancelAnimationFrame(raf)
      }
    }
    return () => raf && cancelAnimationFrame(raf)
  }, [triggerState, setTriggerState])

  return {
    leftTime: (leftTimeMs / 1000).toFixed(3),
    target: (targetMs.current / 1000).toFixed(3)
  }
}

export default useCountdown