import React from "react";
import { Link } from "react-router-dom";
import ErrorGif from "../../components/ErrorGif";

function PageNotFound() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl items-center min-h-screen">
      <p className="text-5xl opacity-90 mt-20 text-red-400">PAGE NOT FOUND</p>
      <p className="text-xl  opacity-30 mb-20 tracking-widest"><span className="px-2">·</span>ERROR 404<span className="px-2">·</span></p>
      <div className="absolute top-1/2 left-1/3 mt-20"></div>
      <ErrorGif />
      <p className="p-5 text-xl opacity-50 mt-10 break-words">
        Sorry, we can't find that page! Don't worry though, everything is under control.  
      </p>
      <Link
        className="text-darkness bg-red-400 hover:opacity-70 font-bold py-2 px-4 rounded-full text-center mt-5"
        to="/"
      >
        Go home page
      </Link>
    </div>
  );
}

export default PageNotFound;
