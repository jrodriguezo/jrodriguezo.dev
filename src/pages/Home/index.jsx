import Blockquote from '../../components/Blockquote'
import Collapse from '../../components/Collapse'
import TypeAnimation from 'react-type-animation'
import {FaRegHeart} from 'react-icons/fa'
import './styles.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'


export default function Home() {

    return(
        <div>
        <div className="bg-yellow-js text-black-js flex min-h-screen text-center">
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
                <div className='absolute inset-x-0 bottom-0 p-10'>
                    <a className="hover:opacity-60 font-semibold" href="https://github.com/jrodriguezo" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </div>
        <section>
            <div id="about" className="flex justify-center items-center py-10">
                <div className='flex-col hidden md:block'>
                    <img src="./assets/images/rick.png" alt="rick"/>
                </div>
                <div className="flex-col bg-darkness text-white opacity-90 p-20 shadow-lg shadow-darkness max-w-5xl rounded-xl">
                    <div className="font-extrabold text-7xl text-center">
                        Who Am I ?
                    </div>
                    <div className="text-4xl text-center mt-2">
                        Jesús Rodríguez Ovejero
                    </div>
                    <div className="text-2xl my-10">
                            <p>I'm <strong className='text-green-rick-morty'>telecommunications engineer</strong> specialized in Computer Science. 
                            Addicted to improve with enthusiasm every day. 
                            Lovin' code random stuffs with a minimalist design.
                            Restless to find perfection. Willing to face any challenge.</p>      
                    </div>
                    <Collapse buttonText="+ qualifications"/>
                </div>
            </div>
            {/*
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
            */}             
            <div id="blogs" className="flex justify-center items-center">
                <div className="flex-col bg-darkness text-white opacity-90 p-20 shadow-lg shadow-darkness max-w-5xl rounded-xl">
                    <div className="font-extrabold text-7xl text-center">
                        Blogs
                    </div>
                    <div className="text-xl text-center mt-2">
                        written by me or <strong className='text-yellow-rick-morty opacity-70'>collaborators*</strong>
                    </div>
                    <div className="text-2xl mt-10">
                            <p>Discover <strong className='text-yellow-rick-morty'>unique content</strong> on differents topics. Are you gonna miss it ?</p>    
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-10 mx-auto max-w-fit'>
                        <Link to="/blog/fitness" className="bg-yellow-rick-morty hover:opacity-70 text-darkness font-bold py-2 px-4 m-2 rounded-full text-center" target="_blank" rel="noopener noreferrer">Fitness</Link>
                        <Link to="/blog/fitness" className="bg-yellow-rick-morty hover:opacity-70 text-darkness font-bold py-2 px-4 m-2 rounded-full text-center" target="_blank" rel="noopener noreferrer">Philosophy</Link>
                        <Link to="/blog/fitness" className="bg-yellow-rick-morty hover:opacity-70 text-darkness font-bold py-2 px-4 m-2 rounded-full text-center" target="_blank" rel="noopener noreferrer">Blockchain</Link>
                    </div>
 
                    <footer className='text-yellow-rick-morty text-sm italic  opacity-70'>
                        *If you'd like to collaborate, feels free to send me a pull request or <a href='#contact' className='font-bold hover:opacity-90'>contact</a> with me in some way.
                    </footer>
                </div>
                <div className='flex-col hidden md:block'>
                    <img className='pl-10 ' src="./assets/images/morty.png" alt="rick"/>
                </div>
            </div>
        </section>
        </div>
    )
}