import React from 'react'

const skills = {
  'tech-stack': [
    {
      label: 'HTML',
      icon: 'html'
    },
    {
      label: 'CSS3',
      icon: 'css3'
    },
    {
      label: 'SASS',
      icon: 'sass'
    },
    {
      label: 'JavaScript',
      icon: 'javascript'
    },
    {
      label: 'TypeScript',
      icon: 'typescript'
    },
    {
      label: 'React',
      icon: 'react'
    },
    {
      label: 'NodeJS',
      icon: 'nodejs'
    }
    /*
    {
      label: 'AngularJS',
      icon: 'angularjs'
    },
    {
      label: 'NPM',
      icon: 'npm'
    },
    {
      label: 'Java',
      icon: 'java'
    },
    {
      label: 'Python',
      icon: 'python'
    }
    */
  ]
}

function Skills () {
  return (
    <section>
      <article className='font text-sm sm:text-lg'>
        <div className="font-extrabold text-5xl sm:text-7xl">
          Tech Stack
        </div>
        <div className="text-base sm:text-xl mt-2">
          most used in my day to day and love it
        </div>
      </article>
      <article className='flex flex-wrap justify-between mt-10 content-center gap-2'>
        {/* Icons retrieved from icons8 with 96x96 svg format */}
        {skills['tech-stack'].map(({ label, icon }) => <div className='flex flex-wrap justify-center h-32 w-32'>
          <img key={label} src={`./assets/images/toolkit-icons/${icon}.svg`} alt={`icon of ${label}`} />
          <p>{label}</p>
        </div>
        )}
      </article>
    </section>
  )
}

export default Skills
