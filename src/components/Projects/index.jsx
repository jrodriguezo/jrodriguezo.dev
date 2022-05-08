import React from "react";

function Projects() {
  const projectsData = [
    {
      title: "eSignature & blockchain",
      description:
        "Web application for electronic signature mechanisms using the building block CEF eSignature that complying with the eIDAS regulation, the validation with ETSI and the Self-Sovereign digital Identity management via Blockchain on the Ethereum network using Smart Contracts.",
      tags: ["Java", "Web3j", "Blockchain", "Solidity"],
      code: "https://github.com/jrodriguezo/eSignature-blockchain",
    },
  ];

  return (
    <div id="projects" className="bg-darkness h-5/6 my-10 py-40">
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <div className="flex-auto text-center px-4">
          <p className="font-extrabold text-7xl text-brown-rick-morty">
            Projects
          </p>
          <div className="text-xl text-center mt-2 opacity-90">
            made in my free time
          </div>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-brown-rick-morty h-full border left-1/2"></div>
            {projectsData.map(({ title, description, tags, code }) => {
              return (
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  {/*mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline */}
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-brown-rick-morty/40 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-brown-rick-morty">
                      1
                    </h1>
                  </div>
                  <div className="order-1 bg-brown-rick-morty rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <a
                      href="https://google.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      type="button"
                      class="inline-flex items-center gap-x-2 absolute top-12 right-12 text-black-js/90 rounded-full text-xl bg-black-js/10 pl-4"
                    >
                      See code{" "}
                      <svg
                        class="w-10 h-10"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        ></path>
                      </svg>
                    </a>
                    <h3 className="mb-3 font-bold text-gray-800 mt-10 text-2xl">
                      {title}
                    </h3>
                    <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
                      {description}
                    </p>
                    <h4 className="mb-3 font-bold text-gray-800 text-md mt-4">
                      Main Technologies used
                    </h4>
                    <ul className="flex flex-wrap space-x-2 justify-center">
                      {tags.map((tag) => {
                        return (
                          <li
                            className={`text-black-js/70 rounded-full text-xl bg-black-js/20 px-2`}
                          >
                            #{tag}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-8">This have not finished yet ...</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
