import React from 'react'

function Footer() {
  return (
    <footer id="contact" className='flex justify-center items-center text-center bg-black-js text-white py-10'>
        <div className='flex-col'>
            <div className='font-extrabold text-7xl opacity-70'>Contact</div> 
            <div className='py-4'>
                <a className="pr-3 opacity-30 hover:opacity-70" href="mailto:jrodriguezo.developer@gmail.com">Email</a>
                <a className="pr-3 opacity-30 hover:opacity-70" href="https://es.linkedin.com/in/jes%C3%BAs-rodr%C3%ADguez-ovejero-b704131b4?trk=profile-badge" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a className="opacity-30 hover:opacity-70" href="https://github.com/jrodriguezo" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer