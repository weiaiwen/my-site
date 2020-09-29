import React from 'react';
import './index.css'


const PageLoadTime = React.memo(({ loadTime }) => {
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