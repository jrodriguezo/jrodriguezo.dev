import React from "react";
import Blockquote from "../Blockquote";
import './style.css'

function Philosophy() {
  return (
    <div
      id="philosophy"
      className="bg-darkness text-blue-rick-morty h-5/6 my-10 py-40 sm:mx-40"
    >
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <div className="flex-auto sm:w-1/2 font-extrabold text-5xl sm:text-7xl text-center px-4 my-10">
          <p>π-losophy</p>
          <ul className="text-lg sm:text-2xl font-thin tracking-wide text-white mt-4">
            <li>Be Humble and Positive</li>
            <li>Don't Take Yourself Too Seriously</li>
            <li>Keep Quiet If You Don't Understand</li>
            <li>Learn Every Day</li>
            <li>Persuade Dreams</li>
          </ul>
        </div>
        <div className="flex-auto w-2/3 mt-10 sm:mt-0 sm:w-1/2">
          <Blockquote />
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
