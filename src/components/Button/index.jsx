import React from 'react'

function Button({children, onClick, ...props}) {
  return (
    <button 
        className="text-darkness bg-green-rick-morty hover:bg-green-darkness-rick-morty font-bold py-2 px-4 rounded-full"
        onClick={onClick}>
            {children}
    </button>
  )
}

export default Button