import React from "react";
import ProjectCard from "../ProjectCard";

function Projects() {
  const projectsData = [
    {
      title: "eSignature & blockchain",
      description:
        "Web application for electronic signature mechanisms using the building block CEF eSignature that complying with the eIDAS regulation, the validation with ETSI and the Self-Sovereign digital Identity management via Blockchain on the Ethereum network using Smart Contracts.",
      tags: ["Java", "Web3j", "Blockchain", "Solidity"],
      deploy: "som",
    },
    {
      title: "eSignature & blockchain",
      description:
        "Web application for electronic signature mechanisms using the building block CEF eSignature that complying with the eIDAS regulation, the validation with ETSI and the Self-Sovereign digital Identity management via Blockchain on the Ethereum network using Smart Contracts.",
      tags: ["Java", "Web3j", "Blockchain", "Solidity"],
      code: "https://github.com/jrodriguezo/eSignature-blockchain",
      deploy: "som",
    },
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
            {projectsData.map(({ title, description, tags, code, deploy }, index) => {
              return (
                <ProjectCard
                  key={`ProjectCard-${index}-${title}`}
                  number={index + 1}
                  position={index % 2 === 0 ? 'right' : 'left'}
                  title={title}
                  description={description}
                  tags={tags}
                  code={code}
                  deploy={deploy}
                />
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
