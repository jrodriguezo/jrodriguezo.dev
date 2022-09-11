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
      <article className='flex justify-center font font-thin text-sm sm:text-lg opacity-90 mt-10'>
        <p>Tech Stack
          <span className="px-2 opacity-30">·</span>
      Most used in my day to day
          <span className="px-2 opacity-30">·</span>
      and love it
        </p>
      </article>
      <article className='grid grid-cols-6 sm:grid-cols-11 mt-10 content-center gap-2'>
        {/* Icons retrieved from icons8 with 96x96 svg format */}
        {skills['tech-stack'].map(({ label, icon }) =>
          <img key={label} src={`./assets/images/toolkit-icons/${icon}.svg`} alt={`icon of ${label}`} />
        )}
      </article>
      <p> More doesn't mean better </p>
    </section>
  )
}

export default Skills
