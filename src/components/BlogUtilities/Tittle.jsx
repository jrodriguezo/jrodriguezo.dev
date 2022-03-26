import React from 'react'

function Tittle({color = 'text-black-js', children}) {
  return (
    <div className={`font-extrabold text-7xl text-center ${color}`}>
        {children}
    </div>
  )
}

export default Tittle