import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl items-center min-h-screen">
      <p className="text-5xl opacity-90 mt-20">PAGE NOT FOUND</p>
      <p className="text-xl  opacity-30 mb-20">ERROR 404</p>
      <img
        className="w-full opacity-30"
        src="./assets/images/error404-not-found.gif"
        alt="error 404"
      />
      <div className="absolute top-1/2 left-1/3 mt-20"></div>
      <p className="text-xl opacity-50 mt-10">
        Sorry, we can't find that page! Don't worry though, everything is under
        control.
      </p>
      <Link
        className="text-darkness bg-brown-rick-morty font-bold py-2 px-4 rounded-full text-center mt-5"
        to="/"
      >
        Go home page
      </Link>
    </div>
  );
}

export default PageNotFound;
