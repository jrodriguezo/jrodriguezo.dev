export default function Home() {
    return(
        <div>
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="font-extrabold text-7xl">
                    Frontend Developer
                </div>
                <div className="text-3xl opacity-60">
                    JavaScript ∙ React ∙ NodeJS
                </div>
            </div>
        </div>
        <div className="flex h-screen">
                <div className="bg-slate-50 w-full m-20 p-20">
                    <div className="font-extrabold text-7xl text-center">
                        Who Am I?
                    </div>
                    <div className="text-3xl text-center">
                        Jesús Rodríguez Ovejero
                    </div>
                    <div className="text-3xl mt-20">
                        <p>
                            About me 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}