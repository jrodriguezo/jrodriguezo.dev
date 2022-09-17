import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import ErrorGif from 'components/ErrorGif'

function PageNotFound () {
  return (
    <>
      <Helmet>
        <title>You have lost, this page doesn't exist</title>
        <meta
          name="description"
          content="Page not found, please come back to home page and continue enjoying."
        />
      </Helmet>
      <div className="p-5 flex flex-col mx-auto max-w-3xl sm:items-center min-h-screen">
        <p className="text-5xl opacity-90 mt-20 mb-10 sm:mb-0 text-red-400">
          PAGE NOT FOUND
        </p>
        <p className="text-xl  opacity-30 mb-20 tracking-widest hidden sm:block">
          <span className="px-2">·</span>ERROR 404
          <span className="px-2">·</span>
        </p>
        <div className="absolute top-1/2 left-1/3 mt-20"></div>
        <ErrorGif />
        <p className="mb-4 text-xl opacity-50 mt-10 break-words">
          Sorry, we can't find that page! Don't worry though, everything is
          under control.
        </p>
        <Link
          className="text-darkness bg-red-400 hover:opacity-70 font-bold py-2 px-4 rounded-full text-center mt-5"
          to="/"
        >
          Go home page
        </Link>
      </div>
    </>
  )
}

export default PageNotFound
