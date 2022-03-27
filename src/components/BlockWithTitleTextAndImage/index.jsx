import React from 'react'
import Collapse from '../Collapse'

function BlockWithTitleTextAndImage() {
  return (
    <div id="about" className="flex justify-end items-center pt-10 xl:pt-20">
        <div className='flex-col hidden 2xl:block'>
            <img className="max-h-96" src="./assets/images/rick.png" alt="rick"/>
        </div>
        <div className="flex-col bg-darkness text-white opacity-90 p-10 xl:p-20 shadow-lg shadow-darkness max-w-5xl xl:rounded-xl 2xl:mr-10">
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
            <div className='flex justify-center font font-thin text-lg opacity-90 mt-10'>
                <p>Tech Stack<span class="px-2 opacity-30">·</span>Most Used</p>
            </div>
            <div className='grid grid-cols-6 sm:grid-cols-11 mt-10 content-center gap-2'>
                {/* Icons retrieved from icons8 with 96x96 svg format*/}
                <img src="./assets/images/toolkit-icons/html.svg" alt="HTML"/>
                <img src="./assets/images/toolkit-icons/css3.svg" alt="CSS3"/>
                <img src="./assets/images/toolkit-icons/sass.svg" alt="SASS"/>
                <img src="./assets/images/toolkit-icons/javascript.svg" alt="JavaScript"/>
                <img src="./assets/images/toolkit-icons/typescript.svg" alt="TypeScript"/>
                <img src="./assets/images/toolkit-icons/react.svg" alt="React"/>
                <img src="./assets/images/toolkit-icons/angularjs.svg" alt="AngularJS"/>
                <img src="./assets/images/toolkit-icons/npm.svg" alt="NPM"/>
                <img src="./assets/images/toolkit-icons/nodejs.svg" alt="NodeJS"/>
                <img src="./assets/images/toolkit-icons/java.svg" alt="Java"/>
                <img src="./assets/images/toolkit-icons/python.svg" alt="Python"/>
            </div>
        </div>
</div>
  )
}

export default BlockWithTitleTextAndImage