import React from 'react'
import { Link } from 'react-router-dom'

function Blogs () {
  const linkStyle =
    'bg-yellow-rick-morty transition-all duration-300 hover:opacity-70 text-black font-bold rounded-md p-2 px-4 my-4 text-center'

  return (
    <div
      id="blogs"
      className="flex items-center justify-between"
    >
      <div className="flex-col w-full">
        <div className="font-extrabold text-gray-50 text-5xl sm:text-7xl">
          Blogs
        </div>
        <div className="text-base sm:text-xl mt-2">
          written by me or
          <span className="text-yellow-rick-morty opacity-70"> collaborators*</span>
        </div>
        <div className="text-2xl mt-10">
          <p>
            Discover
            <span className="font-medium text-yellow-rick-morty"> unique content </span>
            on differents topics. Are you gonna miss it?
          </p>
        </div>
        <div className="flex flex-wrap gap-4 max-w-fit">
          <Link to="/blog/fitness" className={linkStyle} target="_blank">
            Fitness
          </Link>
          <Link to="/blog/blockchain" className={linkStyle} target="_blank">
            Blockchain
          </Link>
        </div>

        <footer className="text-yellow-rick-morty text-sm italic mt-10 opacity-70">
          *If you'd like to collaborate, feels free to send me a pull request or
          <a href="#contact" className="font-bold hover:opacity-90">
            <span> contact </span>
          </a>
          with me in some way
        </footer>
      </div>
      {/* -- Remove image
      <div className="flex-col">
        <img className="max-h-96" src="./assets/images/morty.png" alt="rick" />
      </div>
      */}
    </div>
  )
}

export default Blogs
