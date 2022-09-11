import React from 'react'

function UnderConstruction () {
  return (

    <div className="bg-darkness text-yellow-rick-morty h-5/6 py-40 overflow-hidden">
    <div className="flex flex-col mx-auto p-10 sm:w-1/2 font-bold text-4xl sm:text-7xl text-center sm:px-4 sm:my-10">
      <p>This website is currently under construction.</p>
      <p className="text-xl text-zinc-300 opacity-30"> Last update was on May 21th, 2022</p>
      <p className="mt-20">Visit: </p>
      <a className="hover:opacity-60 text-3xl text-white" href="https://jrodriguezo.github.io/">jrodriguezo.github.io</a>
    </div>
  </div>
  )
}

export default UnderConstruction
