import React from 'react'

function Button({text, color, onClick, ...props}) {
  return (
    <button 
        className={`${color} transition-all duration-300 text-darkness font-bold py-2 px-4 rounded-full text-center hover:opacity-70`}
        onClick={onClick}>
            {text}
    </button>
  )
}

export default Button