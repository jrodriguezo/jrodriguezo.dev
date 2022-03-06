import { Link } from "react-router-dom"

export default function Header() {
    return ( 
      <header>
        <nav className="flex flex-wrap pt-5 items-center max-w-5xl text-3xl mx-auto justify-between">
            <Link className="link" to="/">&lt;jrodriguezo &frasl;&gt;</Link>
            <div>
                  <a className="mr-8" href="#about">About</a>
                  <a href="#blogs">Blogs</a>
            </div>
        </nav>
      </header>
    )
  }