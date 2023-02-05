import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger, FaRegWindowClose } from 'react-icons/fa'

export default function Header () {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prevState) => !prevState)
  }

  const ROUTES = [
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Projects',
      href: '#projects'
    },
    {
      name: 'Blog',
      href: '#blogs'
    }
  ]

  const isVisible = open ? 'block' : 'hidden'

  const routes = (
    <nav className='flex flex-col sm:flex-row'>
      {ROUTES.map(({ name, href }) => {
        return <a key={href} className='group transition-all duration-300 ease-in-out text-xl sm:text-2xl px-3 py-1 opacity-80 hover:opacity-100' href={href}>
          <span className='pb-3 cursor-pointer bg-left-bottom bg-gradient-to-r from-black-js to-black-js bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            {name}
          </span>
        </a>
      })}
    </nav>
  )

  return (
    <header>
      <nav
        className={'flex flex-wrap p-5 sm:pt-5 items-center lg:px-56 text-3xl mx-auto justify-between'}
      >
        <Link
          className='text-xl sm:text-2xl font-semibold hover:opacity-60'
          to='/'
        >
          <img src='personal_logo.png' className='h-10' alt='text about my name and first name' />
        </Link>
        <div className='block sm:hidden transition-opacity easy-in duration-200 hover:opacity-60 cursor-pointer'>
          {open ? <FaRegWindowClose onClick={handleClick} /> : <FaHamburger onClick={handleClick} />}
        </div>
        <div className={'hidden flex-col sm:block sm:flex-row items-center'}>
          {routes}
        </div>
      </nav>
      <div
        className={`flex flex-col ${isVisible} items-end pr-2 mr-8 border-r-2 border-r-black sm:hidden sm:flex-row`}
      >
        {routes}
      </div>
    </header>
  )
}
