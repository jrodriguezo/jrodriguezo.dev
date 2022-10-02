import React from 'react'

function Title ({ color = 'text-black', children }) {
  return (
    <div className={`font-extrabold text-5xl sm:text-7xl text-center ${color}`}>
      {children}
    </div>
  )
}

export default Title
