import React from 'react'

function Footer() {
  return (
    <footer id="contact" className='flex justify-center items-center text-center bg-black-js text-white py-10'>
        <div className='flex-col'>
            <div className='font-extrabold text-7xl opacity-70'>Contact</div> 
            <div className='py-4'>
                <a className="pr-3 opacity-30 hover:opacity-70" href="#about">Email</a>
                <a className="pr-3 opacity-30 hover:opacity-70" href="#blogs">Linkedin</a>
                <a className="opacity-30 hover:opacity-70" href="#blogs">Github</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer