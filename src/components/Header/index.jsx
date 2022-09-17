import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger, FaRegWindowClose } from 'react-icons/fa'

export default function Header () {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prevState) => !prevState)
  }

  const isVisible = open ? 'block' : 'hidden'

  const routes = (
    <>
      <a className="hover:opacity-60 text-xl sm:text-2xl sm:pl-3" href="#about">
        About
      </a>
      <a className="hover:opacity-60 text-xl sm:text-2xl sm:pl-3" href="#blogs">
        Blogs
      </a>
      {/* -- NOT AVAILABLE YET
      <a className="hover:opacity-60 text-xl sm:text-2xl sm:pl-3" href="#projects">
        Projects
      </a>
      */}
    </>
  )

  return (
    <header>
      <nav
        className={'flex flex-wrap p-5 sm:pt-5 items-center lg:px-56 text-3xl mx-auto justify-between'}
      >
        <Link
          className="text-xl sm:text-2xl font-semibold hover:opacity-60"
          to="/"
        >
          <img src="personal_logo.png" className="h-10" alt="text about my name and first name" />
        </Link>
        <div className="block sm:hidden">
          {open ? <FaRegWindowClose onClick={handleClick} /> : <FaHamburger onClick={handleClick} />}
        </div>
        <div className={'hidden flex-col  sm:block sm:flex-row items-center'}>
          {routes}
        </div>
      </nav>
      <div
        className={`flex flex-col ${isVisible} items-end pr-2 mr-8 border-r-2 border-r-black-js sm:hidden sm:flex-row`}
      >
        {routes}
      </div>
    </header>
  )
}
