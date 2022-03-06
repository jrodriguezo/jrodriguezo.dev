import Tittle from "../../components/BlogUtilities/Tittle";
import Header from "../../components/Header";
import {Link} from "react-router-dom"

export default function Fitness() {
    return(
        <div className="">
            <Header />
            <div className="flex justify-center p-20">
                <aside className="h-screen sticky pt-20 p-5 top-0 bg-darkness font-thin text-2xl border-r-8 border-r-green-rick-morty shadow-lg shadow-darkness rounded-xl rounded-r-3xl text-green-rick-morty opacity-60 hover:opacity-100">
                    <Link to="/#blogs">Go back </Link>
                    <p className="font-extrabold">Index</p>
                    <ul className="pl-4 mt-10">
                        <li className="hover:opacity-60">
                            <a href="#change">Tricks when bulking season</a>
                        </li>
                        <li className="hover:opacity-60">
                            <a href="#change">Tricks when cutting season</a>
                        </li>
                        <li className="hover:opacity-60">
                            <a href="#change"> Why is so difficult to lose weight?</a>
                        </li>
                        <li className="hover:opacity-60">
                            <a href="#change">Hall of fame</a>
                        </li>
                    </ul>
                </aside>
                <div className="max-w-5xl p-10 bg-darkness  shadow-lg shadow-darkness rounded-xl">
                        <Tittle children="Be the best version of you" />
                        <p>
                            Why is so difficult to achive our goals?
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/-p1zwLg4T0I" title="bulking"></iframe>
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/-p1zwLg4T0I" title="bulking"></iframe>
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/-p1zwLg4T0I" title="bulking"></iframe>
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/-p1zwLg4T0I" title="bulking"></iframe>
                        </div>
                    </div>
            </div>

        </div>
    )
}