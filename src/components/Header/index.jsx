import { Link } from "react-router-dom"

export default function Header() {
    return ( 
      <header>
        <nav className="flex flex-wrap pt-5 items-center max-w-5xl text-3xl mx-auto justify-between">
            <Link className="font-semibold hover:opacity-60" to="/">&lt;jrodriguezo &frasl;&gt;</Link>
            <div>
                  <a className="mr-8 hover:opacity-60" href="#about">About</a>
                  <a className="hover:opacity-60" href="#blogs">Blogs</a>
            </div>
        </nav>
      </header>
    )
  }