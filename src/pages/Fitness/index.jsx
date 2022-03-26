import Tittle from "../../components/BlogUtilities/Tittle";

export default function Fitness() {
    return(
        <div className="min-h-screen flex justify-center">
                <div className="max-w-7xl p-10 bg-slate-200  shadow-lg shadow-darkness rounded-xl">
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
    )
}