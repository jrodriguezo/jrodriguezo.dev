import React from 'react'

function Button({children, onClick, ...props}) {
  return (
    <button 
        className="text-white hover:text-black-js bg-black-js hover:bg-green-rick-morty font-bold py-2 px-4 rounded-full"
        onClick={onClick}>
            {children}
    </button>
  )
}

export default Button