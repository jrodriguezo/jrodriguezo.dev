import Blockquote from '../../components/Blockquote'
import './styles.css'

export default function Home() {

    const Box = ({year, title}) => {
        return (
            <div className="flex flex-wrap m-4 p-4 rounded-sm border-2 shadow-xl bg-black-js text-white">
                <div className="flex-col">
                    <p className="text-sm">{year}</p>
                    <p className="text-xl text-left">{title}</p>
                </div>
            </div>
        )
    }

    return(
        <div>
        <div className="flex min-h-screen text-center">
            <div className="m-auto">
                <div className="font-extrabold text-7xl">
                    Frontend Developer
                </div>
                <div className="text-3xl opacity-60">
                    JavaScript ∙ React ∙ NodeJS
                </div>
            </div>
        </div>
        <div id="about" className="flex justify-center items-center ml-1/2 min-h-screen mb-40">
                <div className="bg-slate-50 p-20 shadow-2xl shadow-yellow-500 max-w-5xl">
                    <div className="font-extrabold text-7xl text-center">
                        Who Am I?
                    </div>
                    <div className="text-3xl text-center">
                        Jesús Rodríguez Ovejero
                    </div>
                    <div className="text-3xl mt-20">
                            <p className="mb-2 text-center">Telecommunications Engineer specialized in Computer Science</p>
                            <ul className="my-10">
                                <Box year="2015-2019 (4 years)" title="Bachelor of Engineering in Telecommunication Technologies and Services Engineering (BETTS)" />
                                <Box year="2020-2021 (2 years)" title="Master of Science in Telecommunication Engineering" />
                            </ul>
                            <p className="mb-2 text-center">Lovin' code random stuffs, design </p>
                           
                    </div>
                </div>
            </div>
            <div id="some" className="bg-black-js text-yellow-js flex justify-center items-center ml-1/2 min-h-screen">
                    <div>
                        <div className="font-extrabold text-7xl text-center my-10">
                            <p>π-losophy</p>
                            <ul className='text-lg text-white p-10 m-10'>
                                <li>Be Humble and Positive</li>
                                <li>Don't Take Yourself Too Seriously</li>
                                <li>Keep Quiet If You Don't Understand</li>
                                <li>Learn Every Day</li>
                                <li>Persuade Dreams</li>
                            </ul>

                        </div>
                        <div className="flex flex-row">
                            <Blockquote />
                        </div>
                    </div>
            </div>
        </div>
    )
}