import React from 'react'
import CountUp from 'react-countup'

const countCodeYears = startDate => {
  const currentDate = new Date()
  const countingCurrentMonth = 1
  let months
  months = (currentDate.getFullYear() - startDate.getFullYear()) * 12
  months -= startDate.getMonth()
  months += currentDate.getMonth() + countingCurrentMonth
  const numMonths = months <= 0 ? 0 : months
  const numYears = numMonths / 12
  return numYears.toFixed(1)
}
const strongPhraseStyles = 'font-medium text-gray-500'

function AboutMe () {
  return (
    <div id='about'>
      <header className='flex lg:flex-row flex-col justify-between items-center gap-8'>
        <div>
          <div className='font-bold text-5xl max-w-xs sm:max-w-none sm:text-7xl mt-20 text-gray-50'>Jesús Rodríguez Ovejero</div>
          <div className={`${strongPhraseStyles} text-3xl sm:text-5xl mt-2 `}>
            <span className='font-extralight text-gray-300 leading-tight'>
          +
              <CountUp
                className='mr-2'
                end={countCodeYears(new Date(2021, 6, 1))}
                decimals={1}
                duration={2.3}
                enableScrollSpy
                scrollSpyOnce
                delay={0.1}
              />
            years of experience as <span className='inline-block font-extrabold text-yellow-rick-morty'>FRONTEND DEVELOPER</span>
            </span>
          </div>
        </div>
        <figure className='max-w-[350px]'>
          <img src='./assets/images/jesus-profile.png' alt='show historical numbers' />
        </figure>
      </header>
      <div className='w-full pt-5 sm:pt-20'>
        <div id='about' className='flex'>
          <div className='xl:rounded-xl max-w-[128ch]'>
            <div className='font-semibold text-gray-50 text-lg sm:text-2xl'>Short, 1st person</div>
            <div className='text-lg sm:text-2xl mt-5 mb-10'>
              <p>
                I'm
                <span className={`${strongPhraseStyles}`}> Telecommunications Engineer </span>
                specialized in
                <span className={`${strongPhraseStyles}`}> Computer Science</span>. I've passionate about
                <span className={`${strongPhraseStyles}`}> Frontend Development </span>
                and that is what I do.
              </p>
            </div>
            <div className='text-lg text-gray-50 font-semibold sm:text-2xl mt-5 sm:mt-10'>Long, 1st person</div>
            <div className='text-lg sm:text-2xl mt-5 mb-10'>
              <ul>
                <li>
                  I graduated from
                  <span className={`${strongPhraseStyles}`}> Universidad Politécnica de Madrid </span>
                  with a<span className={`${strongPhraseStyles}`}> B.S and M.S in Telecommunications Engineer </span>
                  both, specialized in
                  <span className={`${strongPhraseStyles}`}> Computer Science</span>. I've passionate and dedicated to
                  <span className={`${strongPhraseStyles}`}> Frontend Development</span>. In my free time, I try to be up
                  to date (even though it is impossible) but also, I'm addicted to improve with entusiasm every day. If
                  I would define what is the best part of coding is when it's made with love; obsessed with clean code,
                  SOLID principles and best practices.
                </li>
                <li className='mt-10'>
                  If you got here but you didn't figure out anything, don't worry though.
                  <span className='italic border-l-2 my-10 pl-6 border-gray-500 font-extralight block text-gray-300'>
                    My job is about writing text using random English words and symbols in fancy colors, and the text is
                    not even properly aligned to the left.
                  </span>
                  Maybe you got a slight smile, I hope so. Memes and positive vibes are a must in my life.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
