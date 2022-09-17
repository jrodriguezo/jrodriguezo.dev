import React from 'react'
import errorImageGif from './error404-not-found.gif'

function ErrorGif () {
  return (
    <img
      className="w-full opacity-30"
      src={errorImageGif}
      alt="Error 404"
    />
  )
}

export default ErrorGif
