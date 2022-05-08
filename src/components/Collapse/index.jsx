import React, { useState } from "react";
import Button from "../Button";

function Collapse({ buttonText }) {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

  const Box = ({ year, title }) => {
    return (
      <li className="border-l-4 border-green-rick-morty mt-4 pl-2 flex-col">
        <p className="text-xs sm:text-sm text-green-rick-morty">{year}</p>
        <p className="text-sm sm:text-xl text-left">{title}</p>
      </li>
    );
  };

  return (
    <div>
      <Button
        text={buttonText}
        color="text-sm sm:text-base bg-green-rick-morty"
        onClick={handleClick}
      />
      <ul
        className={`${visibility ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"} transition-opacity duration-1000 my-8 pl-10`}
      >
        <Box
          year="2020-2021 (2 years)"
          title="Master of Science in Telecommunication Engineering"
        />
        <Box
          year="2015-2019 (4 years)"
          title="Bachelor of Engineering in Telecommunication Technologies and Services Engineering (BETTS)"
        />
      </ul>
    </div>
  );
}

export default Collapse;
