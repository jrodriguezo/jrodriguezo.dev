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
  return (
    <div id="about" className="flex py-10">
      <div className="flex-col text-white opacity-90 max-w-5xl xl:rounded-xl 2xl:mr-10">
        <div className="font-extrabold text-5xl sm:text-7xl">
                  Jesús Rodríguez Ovejero
        </div>
        <div className="text-2xl sm:text-2xl mt-2">
                    +{countCodeYears(new Date(2021, 6, 1))} years experience as a Developer
        </div>
        <div className="text-lg sm:text-2xl mt-10">
                    Who Am I?
        </div>
        <div className="text-lg sm:text-2xl mt-5 mb-10">
          <p> Telecommunications Engineer specialized in Computer Science. I've passionate about frontend development.
                    Addicted to improve with enthusiasm every day.
                    Obsessed with clean code and SOLID principles.
                    Lovin' code dedica with a minimalist design.

                    Restless to find perfection. Willing to face any challenge.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
