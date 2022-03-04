import Blockquote from '../../components/Blockquote'
import Collapse from '../../components/Collapse'
import './styles.css'

export default function Home() {



    return(
        <div>
        <div className="flex min-h-screen text-center">
            <div className="m-auto">
                <div className="font-extrabold text-7xl">
                    Frontend Developer
                </div>
                <div className="text-3xl opacity-60">
                    <p>
                        JavaScript lover
                    </p> 
                    <p className='text-5xl mt-6'>
                        💛
                    </p>
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
                    <div className="text-2xl my-10">
                            <p>I'm telecommunications engineer specialized in Computer Science. Addicted to improve with enthusiasm every day. Lovin' code random stuffs and minimalist design.
                            Restless to find perfection. Willing to face any challenge.</p>      
                    </div>
                    <Collapse buttonText="+ University qualifications"/>
                </div>
            </div>
            <div id="some" className="bg-black-js text-yellow-js flex justify-center items-center ml-1/2 min-h-screen">
                    <div>
                        <div className="font-extrabold text-7xl text-center my-10">
                            <p>π-losophy</p>
                            <ul className='text-2xl font-extralight text-white p-10 m-10'>
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