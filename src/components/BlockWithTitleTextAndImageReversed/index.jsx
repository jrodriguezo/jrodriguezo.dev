import React from "react";
import { Link } from "react-router-dom";

function BlockWithTitleTextAndImageReversed() {
  return (
    <div id="blogs" className="flex justify-center items-center pt-10">
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
            <Link to="/blog/fitness" className="bg-yellow-rick-morty hover:opacity-70 text-darkness font-bold py-2 px-4 m-2 rounded-full text-center" target="_blank">Fitness</Link>
            <Link to="/blog/fitness" className="bg-yellow-rick-morty hover:opacity-70 text-darkness font-bold py-2 px-4 m-2 rounded-full text-center" target="_blank">Blockchain</Link>
        </div>

        <footer className='text-yellow-rick-morty text-sm italic opacity-70'>
            *If you'd like to collaborate, feels free to send me a pull request or <a href='#contact' className='font-bold hover:opacity-90'>contact</a> with me in some way.
        </footer>
    </div>
    <div className='flex-col hidden md:block'>
        <img className='pl-10 ' src="./assets/images/morty.png" alt="rick"/>
    </div>
</div>
  );
}

export default BlockWithTitleTextAndImageReversed;
