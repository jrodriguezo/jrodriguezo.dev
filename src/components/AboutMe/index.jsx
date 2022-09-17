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
  const strongPhraseStyles = 'font-medium text-gray-100'
  return (
    <div
      id="blogs"
    >
      <div className="bg-darkness p-10 xl:p-20 shadow-lg shadow-darkness w-full xl:py-10">
        <div id="about" className="flex py-10">
          <div className="max-w-5xl xl:rounded-xl 2xl:mr-10">
            <div className="font-extrabold text-5xl sm:text-7xl">
          Jesús Rodríguez Ovejero
            </div>
            <div className={`${strongPhraseStyles} text-2xl sm:text-2xl mt-2`}>
          +{countCodeYears(new Date(2021, 6, 1))} years experience as a Developer
            </div>
            <div className="text-2xl font-semibold sm:text-5xl mt-10">
          Who Am I?
            </div>
            <div className="text-lg font-semibold text-2xl mt-10 sm:mt-20">
          Short, 1st person
            </div>
            <div className="text-lg sm:text-2xl mt-5 mb-10">
              <p> I'm <span className={`${strongPhraseStyles}`}>Telecommunications Engineer</span> specialized in <span className={`${strongPhraseStyles}`}>Computer Science</span>. I've passionate about  <span className={`${strongPhraseStyles}`}>Frontend Development</span> and that is what I do.</p>
            </div>
            <div className="text-lg font-semibold sm:text-2xl mt-5 sm:mt-20">
          Long, 1st person
            </div>
            <div className="text-lg sm:text-2xl mt-5 mb-10">
              <ul>
                <li>I graduated from <span className={`${strongPhraseStyles}`}>Universidad Politécnica de Madrid</span> with a <span className={`${strongPhraseStyles}`}>B.S and M.S in Telecommunications Engineer</span> both, specialized in <span className={`${strongPhraseStyles}`}>Computer Science</span>.
              I've passionate and dedicated to <span className={`${strongPhraseStyles}`}>Frontend Development</span>. In my free time, I try to be up to date (even though it is impossible) but also,
              I'm addicted to improve with entusiasm every day.
              If I would define what is the best part of coding is when it is made with love;
              obsessed with clean code, SOLID principles and best practices.</li>
                <li className='mt-10'>If you got here but you didn't figure out anything, don't worry though. <span className='italic my-4 block text-gray-400'>My job is about writing text using
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
