
import React from 'react';
import { useLoadTime } from '../../hooks'
import './index.css'


const PageLoadTime = React.memo(() => {
  const loadTime = useLoadTime()
  if (performance && loadTime) {
    return (
      <div className="load-time">
        Page Load Time: {loadTime.toFixed(2)}ms
      </div>
    )
  }
  return null
})

export default PageLoadTime