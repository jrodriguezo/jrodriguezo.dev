import GithubSVG from 'components/SVGs/github'
import GmailSVG from 'components/SVGs/gmail'
import LinkedinSVG from 'components/SVGs/linkedin'
import React from 'react'

/* Icons retrieved from iconos8.es exported as .svg with size of 48x48 */
function Footer () {
  return (
    <footer
      id='contact'
      className='flex flex-col justify-center items-center bg-black text-white py-20'
    >
      <div className='font-extrabold text-7xl opacity-70'>Contact</div>
      <section className='flex flex-row py-4'>
        <a
          className='flex flex-col justify-between opacity-30 transition-hover ease-in duration-200 hover:opacity-70 hover:-translate-y-2'
          href='mailto:jrodriguezo.developer@gmail.com'
        >
            Email
          <GmailSVG className='h-7 w-7 mx-auto mt-2' />
        </a>
        <span className='px-2 opacity-30'>·</span>
        <a
          className='flex flex-col justify-between opacity-30 transition-hover ease-in duration-200 hover:opacity-70 hover:-translate-y-2'
          href='https://es.linkedin.com/in/jes%C3%BAs-rodr%C3%ADguez-ovejero-b704131b4?trk=profile-badge'
          target='_blank'
          rel='noopener noreferrer'
        >
            Linkedin
          <span>
            <LinkedinSVG className='h-9 w-9 mx-auto mt-2'/>
          </span>
        </a>
        <span className='px-2 opacity-30'>·</span>
        <a
          className='flex flex-col justify-between opacity-30 transition-hover ease-in duration-200 hover:opacity-70 hover:-translate-y-2'
          href='https://github.com/jrodriguezo'
          target='_blank'
          rel='noopener noreferrer'
        >
            GitHub
          <span>
            <GithubSVG className='h-8 w-8 mx-auto mt-2' />
          </span>
        </a>
      </section>
    </footer>
  )
}

export default Footer
