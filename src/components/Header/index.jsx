import { Link } from "react-router-dom"

export default function Header() {
    return ( 
      <nav className="flex pt-5 items-center w-full max-w-5xl text-3xl mx-auto justify-between ">
          <Link className="link" to="/">jrodriguezo.dev</Link>
          <div>
                <Link className="mr-8" to="/blog/fitness">About</Link>
                <Link className="mr-8" to="/blog/fitness">Projects</Link>
                <Link to="/blog/fitness">Blogs</Link>
          </div>
      </nav>
    )
  }