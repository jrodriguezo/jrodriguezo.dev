import React from 'react'
import Blockquote from 'components/Blockquote'

function Philosophy () {
  return (
    <div
      id='philosophy'
      className='bg-darkness h-5/6 py-20'
    >
      <div className='flex justify-center items-center flex-col xl:flex-row'>
        <div className='flex-auto xl:w-1/2 text-gray-50 font-extrabold text-5xl sm:text-7xl text-center px-4 sm:px-10'>
          <p>π-losophy</p>
          <ul className='text-lg sm:text-2xl font-thin tracking-wide mt-4'>
            <li>Be Humble and Positive</li>
            <li>Don&apos;t Take Yourself Too Seriously</li>
            <li>Keep Quiet If You Don&apos;t Understand</li>
            <li>Learn Every Day</li>
            <li>Persuade Dreams</li>
          </ul>
        </div>
        <div className='flex-auto w-2/3 mt-10 xl:mt-0 xl:w-1/2'>
          <Blockquote />
        </div>
      </div>
    </div>
  )
}

export default Philosophy
