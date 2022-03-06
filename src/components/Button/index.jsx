import React from 'react'

function Button({text, color, onClick, ...props}) {
  return (
    <button 
        className={`${color} text-darkness font-bold py-2 px-4 rounded-full text-center`}
        onClick={onClick}>
            {text}
    </button>
  )
}

export default Button