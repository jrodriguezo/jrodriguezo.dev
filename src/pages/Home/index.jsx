import Header from 'components/Header'
import CoverPage from 'components/CoverPage'

import Philosophy from '../Philosophy'
import Blogs from 'components/Blogs'

// import UnderConstruction from 'components/UnderConstruction'
// import Projects from 'components/Projects'
import Helmet from 'react-helmet'
import AboutMe from 'components/AboutMe'
import Skills from 'components/Skills'

import './styles.css'
import Slider from 'components/Slider/slider'

export default function Home () {
  return (
    <>
      <Header />
      <div>
        <Helmet>
          <title>
          Learn more about me and also check out my blog and projects | Jesús
          Rodríguez Ovejero
          </title>
          <meta
            name='description'
            content='Jesús Rodríguez Ovejero is a Telecommunications Engineer specialized in Computer Science. Currently, he works as a Frontend Developer. Visit his little blog and take a look at his most recent projects.'
          />
        </Helmet>
        <div className='bg-yellow-rick-morty text-black'>
          <CoverPage />
        </div>
        <section className='flex flex-col sm:py-16 py-8 sm:gap-16 gap-8 lg:px-56 text-gray-300 px-3 sm:px-6'>
          <AboutMe />
          <Slider />
          <Skills />
          <Philosophy />
          <Blogs />
          {/* <Projects /> -- TODO: improve how it should be visible */}
          {/* <UnderConstruction /> -- Release v1.0 */}
        </section>
      </div>
    </>

  )
}
