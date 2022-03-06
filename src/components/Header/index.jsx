import { Link } from "react-router-dom"

export default function Header() {
    return ( 
      <header>
        <nav className="flex flex-wrap pt-5 items-center max-w-5xl text-3xl mx-auto justify-between">
            <Link className="link" to="/">jrodriguezo.dev</Link>
            <div>
                  <a className="mr-8" href="#about">About</a>
                  <a className="mr-8" href="#blogs">Blogs</a>
                  <Link className="mr-8" to="/blog/fitness">Projects</Link>
                  <Link to="/blog/fitness">Blogs</Link>
            </div>
        </nav>
      </header>
    )
  }