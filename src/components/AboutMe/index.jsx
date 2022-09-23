import React from 'react'

const countCodeYears = (startDate) => {
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

function AboutMe () {
  const strongPhraseStyles = 'font-medium text-gray-500'
  return (
    <div
      id="about"
    >
      <div className="font-bold text-5xl sm:text-7xl mt-20 text-gray-50">
        Jesús Rodríguez Ovejero
      </div>
      <div className={`${strongPhraseStyles} text-xl sm:text-3xl mt-2 `}>
        <span className='font-extralight text-gray-300'>+{countCodeYears(new Date(2021, 6, 1))} years experience as a Frontend Developer</span>
      </div>
      <div className="w-full pt-5 sm:pt-20">
        <div id="about" className="flex">
          <div className="max-w-5xl xl:rounded-xl 2xl:mr-10">
            <div className="font-semibold text-gray-50 text-lg sm:text-2xl">
          Short, 1st person
            </div>
            <div className="text-lg sm:text-2xl mt-5 mb-10">
              <p> I'm <span className={`${strongPhraseStyles}`}>Telecommunications Engineer</span> specialized in <span className={`${strongPhraseStyles}`}>Computer Science</span>. I've passionate about  <span className={`${strongPhraseStyles}`}>Frontend Development</span> and that is what I do.</p>
            </div>
            <div className="text-lg text-gray-50 font-semibold sm:text-2xl mt-5 sm:mt-10">
          Long, 1st person
            </div>
            <div className="text-lg sm:text-2xl mt-5 mb-10">
              <ul>
                <li>I graduated from <span className={`${strongPhraseStyles}`}>Universidad Politécnica de Madrid</span> with a <span className={`${strongPhraseStyles}`}>B.S and M.S in Telecommunications Engineer</span> both, specialized in <span className={`${strongPhraseStyles}`}>Computer Science</span>.
              I've passionate and dedicated to <span className={`${strongPhraseStyles}`}>Frontend Development</span>. In my free time, I try to be up to date (even though it is impossible) but also,
              I'm addicted to improve with entusiasm every day.
              If I would define what is the best part of coding is when it's made with love;
              obsessed with clean code, SOLID principles and best practices.</li>
                <li className='mt-10'>If you got here but you didn't figure out anything, don't worry though. <span className='italic border-l-2 my-10 pl-6 border-gray-500 font-extralight block text-gray-300'> My job is about writing text using
              random English words and symbols in fancy colors, and the text is not even properly aligned to the left.</span>
              Maybe you got a slight smile, I hope so. Memes and positive vibes with extra positive ingredient, are a must in my life.
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
