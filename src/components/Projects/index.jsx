import React from "react";

function Projects() {
  return (
    <div id="projects" className="bg-darkness h-5/6 my-10 py-40 ">
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <div className="flex-auto text-center px-4 my-10">
          <p className="font-extrabold text-7xl text-brown-rick-morty">
            Projects
          </p>
          <div className="text-xl text-center mt-2 opacity-90">
            made in my free time or university
          </div>
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 absolute border-opacity-20 border-brown-rick-morty h-full border left-1/2"></div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-brown-rick-morty shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div class="order-1 bg-brown-rick-morty rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  eSignature & blockchain
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Web application for electronic signature mechanisms using the
                  building block CEF eSignature that complying with the eIDAS
                  regulation, the validation with ETSI and the Self-Sovereign
                  digital Identity management via Blockchain on the Ethereum
                  network using Smart Contracts.
                </p>
                <h4 class="mb-3 font-bold text-gray-800 text-lg mt-10">
                  Main Technologies used
                </h4>
                <ul>
                  <li className="inline-block rounded-full text-white 
                    bg-black hover:bg-slate-500 duration-1000 
                    text-xs font-bold 
                    mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                    opacity-90 hover:opacity-90">
                            Java
                  </li>
                  <li className="inline-block rounded-full text-white 
                    bg-black hover:bg-gray-500 duration-300 
                    text-xs font-bold 
                    mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                    opacity-90 hover:opacity-100">
                            Web3js
                  </li>
                </ul>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  Lorem Ipsum
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
