import React, { useState, useEffect } from 'react'
import GithubSVG from '../SVGs/github'
import { VscRocket } from 'react-icons/vsc'

function ProjectCard ({
  title,
  description,
  tags,
  code,
  deploy,
  position,
  number
}) {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1200
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  const project = (width = 'w-5/12', marginY = 'my-0') => (
    <div className={`order-1 bg-brown-rick-morty rounded-lg shadow-md shadow-brown-rick-morty ${width} ${marginY} px-6 py-4`}>
      <nav className="flex flex-wrap justify-end gap-2">
        {deploy && (
          <a
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className={'inline-flex items-center gap-x-2 text-black/90 rounded-full text-xl bg-[#C35353]/50 transition-all duration-300 hover:opacity-70 pl-4'}
          >
            Demo <VscRocket className="w-10 h-10 p-2" />
          </a>
        )}
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className={'inline-flex items-center gap-x-2 text-black/90 rounded-full text-xl bg-[#F17655]/50 transition-all duration-300 hover:opacity-70 pl-4'}
          >
            Code <GithubSVG className="w-10 h-10 p-1" />
          </a>
        )}
      </nav>
      <h3 className="mb-3 font-bold text-gray-800 mt-2 text-2xl">{title}</h3>
      <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
        {description}
      </p>
      <h4 className="mb-3 font-bold text-gray-800 text-md mt-4">
        Main Technologies used
      </h4>
      <ul className="flex flex-wrap space-x-2 justify-center">
        {tags.map((tag) => {
          return (
            <li key={tag}
              className={'text-black/70 rounded-full text-xl bg-black/20 px-2 my-2'}
            >
              #{tag}
            </li>
          )
        })}
      </ul>
    </div>
  )

  if (width > breakpoint) {
    return <div
      className={`mb-8 ${
        position === 'right'
          ? 'flex right-timeline'
          : 'flex flex-row-reverse left-timeline'
      } justify-between items-center w-full`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-brown-rick-morty/40 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-brown-rick-morty">
          {number}
        </h1>
      </div>
      {project()}
    </div>
  }
  return project('w-12/12', 'my-12')
}

export default ProjectCard
