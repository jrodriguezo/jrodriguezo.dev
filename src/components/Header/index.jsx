import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger, FaRegWindowClose } from 'react-icons/fa'
import useWindowSize from 'hooks/useWindowSize'

export default function Header () {
  const [open, setOpen] = useState(false)
  const [width] = useWindowSize()

  const handleClick = () => {
    setOpen((prevState) => !prevState)
  }

  const closeHeader = () => setOpen(false)

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

  useEffect(() => {
    if (width > 640) {
      closeHeader()
    }
  }, [width])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'visible'
      }
    }
  }, [open])

  const isVisible = open ? 'block' : 'hidden'

  const Routes = () => <nav className='flex flex-col sm:flex-row gap-8 sm:gap-0'>
    {ROUTES.map(({ name, href }) => {
      return <a key={href} onClick={closeHeader} className={`group transition-all duration-300 ease-in-out sm:text-2xl px-3 py-1 opacity-80 hover:opacity-100 ${open ? 'text-[32px]' : 'text-xl'}`} href={href}>
        <span className={`pb-3 cursor-pointer bg-left-bottom bg-gradient-to-r ${open ? 'from-white to-white' : 'from-black-js to-black-js'} bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}>
          {name}
        </span>
      </a>
    })}
  </nav>

  return (
    <header className='w-full relative bg-yellow-rick-morty text-black-js'>
      <nav
        className='flex flex-wrap p-5 sm:pt-5 items-center lg:px-56 text-3xl mx-auto justify-between'
      >
        <Link
          className='text-xl sm:text-2xl font-semibold hover:opacity-60'
          to='/'
        >
          <img src='personal_logo.png' className='h-10' alt='text about my name and first name' />
        </Link>
        <div className='block sm:hidden transition-opacity easy-in duration-200 hover:opacity-60 cursor-pointer'>
          {!open && <FaHamburger onClick={handleClick} />}
        </div>
        <div className={'hidden flex-col sm:block sm:flex-row items-center'}>
          <Routes />
        </div>
      </nav>
      <div
        className={`flex flex-col w-full text-center ${isVisible} fixed pr-2 mr-8 border-r-2 border-r-black sm:hidden sm:flex-row min-h-screen inset-0 backdrop-blur-sm z-[1] h-full bg-black opacity-80 justify-center items-center text-white text-2xl`}
      >
        <Routes />
        <button onClick={handleClick}>
          <FaRegWindowClose className='mt-20 text-[42px] hover:opacity-60' />
        </button>
      </div>
    </header>
  )
}
