import React from 'react'

function Tittle ({ color = 'text-black', children }) {
  return (
    <div className={`font-extrabold text-5xl sm:text-7xl text-center ${color}`}>
      {children}
    </div>
  )
}

export default Tittle
