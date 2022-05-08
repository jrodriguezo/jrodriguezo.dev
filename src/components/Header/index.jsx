import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHamburger, FaRegWindowClose } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  const isVisible = open ? "block" : "hidden";

  const routes = (
    <>
      <a className="hover:opacity-60 text-xl sm:text-2xl sm:mr-4" href="#about">
        About
      </a>
      <a className="hover:opacity-60 text-xl sm:text-2xl" href="#blogs">
        Blogs
      </a>
    </>
  );

  return (
    <header>
      <nav
        className={`flex flex-wrap p-5 sm:p-0 sm:pt-5 items-center max-w-5xl text-3xl mx-auto justify-between`}
      >
        <Link className="text-xl sm:text-2xl font-semibold hover:opacity-60" to="/">
          &lt;jrodriguezo &frasl;&gt;
        </Link>
        <div className="block sm:hidden">
          {!open && <FaHamburger onClick={handleClick} />}
          {open && <FaRegWindowClose onClick={handleClick} />}
        </div>
        <div className={`hidden flex-col  sm:block sm:flex-row items-center`}>
          {routes}
        </div>
      </nav>
      <div
        className={`flex flex-col ${isVisible} items-end pr-2 mr-8 border-r-2 border-r-black-js sm:hidden sm:flex-row`}
      >
        {routes}
      </div>
    </header>
  );
}
