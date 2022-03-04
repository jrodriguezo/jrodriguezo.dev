import Blockquote from '../../components/Blockquote'
import Collapse from '../../components/Collapse'
import TypeAnimation from 'react-type-animation'
import {FaRegHeart} from 'react-icons/fa'
import './styles.css'


export default function Home() {

    return(
        <div>
        <div className="bg-yellow-js flex min-h-screen text-center">
            <div className="m-auto">
                <div className="font-extrabold text-7xl">
                    Frontend Developer
                </div>
                <div className="text-3xl opacity-60">
                    <TypeAnimation
                        cursor={true}
                        sequence={['JavaScript revol ', 1000, 'JavaScript lover ']}
                        wrapper="p"
                        repeat={1}/>
                        <div className='flex justify-center mt-2'>
                            <FaRegHeart size={60} />
                        </div>
                        
                </div>
            </div>
        </div>
        <section>
            <div id="about" className="flex justify-center items-center min-h-screen mb-40">
                <div className='flex-col'>
                    <img  src="./assets/images/rick.png" alt="rick"/>
                </div>
                <div className="flex-col bg-darkness text-white opacity-90 p-20 shadow-lg shadow-darkness max-w-5xl rounded-xl">
                    <div className="font-extrabold text-7xl text-center">
                        Who Am I ?
                    </div>
                    <div className="text-4xl text-center mt-2">
                        Jesús Rodríguez Ovejero
                    </div>
                    <div className="text-2xl my-10">
                            <p>I'm <strong>telecommunications engineer</strong> specialized in Computer Science. 
                            Addicted to improve with enthusiasm every day. 
                            Lovin' code random stuffs with a minimalist design.
                            Restless to find perfection. Willing to face any challenge.</p>      
                    </div>
                    <Collapse buttonText="+ qualifications"/>
                </div>
            </div>
            <div id="philosophy" className="bg-black-js text-green-rick-morty">
                    <div className='flex justify-center items-center'>
                        <div className="flex-auto w-1/2 font-extrabold text-7xl text-center px-4 my-10">
                            <p>π-losophy</p>
                            <ul className='text-2xl font-thin tracking-wide text-white mt-4'>
                                <li>Be Humble and Positive</li>
                                <li>Don't Take Yourself Too Seriously</li>
                                <li>Keep Quiet If You Don't Understand</li>
                                <li>Learn Every Day</li>
                                <li>Persuade Dreams</li>
                            </ul>
                        </div>
                        <div className="flex-auto w-1/2">
                            <Blockquote />
                        </div>
                    </div>
            </div>
            <div id="about" className="flex justify-center items-center min-h-screen">
                <div className="flex-col bg-darkness text-white opacity-90 p-20 shadow-lg shadow-darkness max-w-5xl rounded-xl">
                    <div className="font-extrabold text-7xl text-center">
                        Blogs
                    </div>
                    <div className="text-xl text-center mt-2">
                        written by me or collaborators<strong className='text-yellow-rick-morty'>*</strong>
                    </div>
                    <div className="text-2xl my-10">
                            <p>Discover <strong className='text-yellow-rick-morty'>unique content</strong> on differents topics. Are you gonna miss it ?</p>    
                    </div>
                    <footer className='text-yellow-rick-morty text-sm italic'>
                        If you would like to collaborate with me, send me a pull request or contact with me.
                    </footer>
                </div>
                <div className='flex-col'>
                    <img className='pl-10 ' src="./assets/images/morty.png" alt="rick"/>
                </div>
            </div>
        </section>
        </div>
    )
}