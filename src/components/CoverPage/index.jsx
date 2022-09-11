import React from 'react'
import TypeAnimation from 'react-type-animation'
import { FaRegHeart } from 'react-icons/fa'

//  text-transparent bg-clip-text bg-gradient-to-r from-black-js via-yellow-js to-black-js

function CoverPage () {
  return (
    <div className="flex min-h-screen text-center">
      <div className="m-auto">
        <div className="font-extrabold text-5xl sm:text-7xl">Frontend Developer</div>
        <div className="text-xl sm:text-3xl opacity-60">
          <TypeAnimation
            cursor={true}
            sequence={['JavaScript revol ', 1000, 'JavaScript lover ']}
            wrapper="p"
            repeat={1}
          />
          <div className="flex justify-center mt-2">
            <FaRegHeart size={60} />
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 p-10">
          <a
            className="hover:opacity-60 font-semibold"
            href="https://github.com/jrodriguezo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          </div> */}
      </div>
    </div>
  )
}

export default CoverPage
