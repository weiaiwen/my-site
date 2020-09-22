import { useEffect, useRef, useState } from 'react'

let raf
let target
let startTime

const useCountdown = (triggerState, setTriggerState) => {
  const [leftTime, setLeftTime] = useState(0)
  const _triggerState = useRef(triggerState)

  useEffect(() => {
    _triggerState.current = triggerState
    const rafFunc = () => {
      const diff = Date.now() - startTime
      const gap = target - diff
      if (_triggerState.current !== 1) {
        cancelAnimationFrame(raf)
        return
      }
      if (gap >= 0) {
        setLeftTime(gap)
        requestAnimationFrame(rafFunc)
      } else {
        setLeftTime(0)
        setTriggerState(2)
        cancelAnimationFrame(raf)
      }
    }
    
    if (triggerState === 1) {
      startTime = Date.now()
      raf = requestAnimationFrame(rafFunc)
    } else if (triggerState === 0) {
      target = parseInt(Math.random() * 2000 + 4000)
      setLeftTime(target)
      if (raf) {
        cancelAnimationFrame(raf)
      }
    }
    return () => raf && cancelAnimationFrame(raf)
  }, [triggerState, setTriggerState])

  return leftTime
}

export default useCountdown