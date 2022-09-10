import React, { useState } from 'react'
import ProjectPineapple from "../Images/SC Project Pineapple.png"
import ProjectPineappleLogo from "../Images/ProjectPineappleLogo.jpeg"
import ProjectAboutMe from "../Images/SC About Me Website 2.png"
import ProjectFinLit from "../Images/SC FinLit Game.png"
import ProjectSmartWalk from "../Images/SC SmartWalk.png"



const Projects = () => {
  return (
    <div id='Projects' className='bg-gray-50 w-full h-screen md:pb-16 text-blue-700'>
        <div className='max-w-[1000px] mx-auto flex-col w-full h-full'>
            {/* title */}
            <div className='pt-8 md:pt-16 mx-auto flex-col text-center'>
                <h1 className='text-5xl text-center font-bold inline border-b-4 border-pink-600 2xl:text-7xl'>Projects</h1>
            </div>
            <h2 className='text-2xl mt-8 ml-4 text-orange-600 font-semibold md:my-8 2xl:text-3xl'>Check out some of my recent work</h2>
            <h3>Click each project for more info</h3>



            {/* TESTING project button & modal */}
            <div className='grid sm:grid-cols-2 gap-4'>
                {/* project 1 */}
                <button className='border-4 border-[#e1bea2] rounded-lg'>
                    {/* outer title */}
                    <h2 className='bg-blue-200 text-2xl text-center'>Project Pineapple</h2>
                    <img src={ProjectPineappleLogo} alt='Project Pineapple Logo'></img>
                    <p className='text-black mt-1 text-lg ml-3 text-start'>Developed an IOS app that gives individuals the option of added security when going out 
                            for the night by scheduling check-ins at certain times to survey the wellbeing of the user. If the 
                            password is not submitted by the scheduled time, an alert will be sent to those that the user labeled 'contacts.'
                        </p>
                        <p className='ml-3 text-red-500 text-lg'>Won second place with this project at H4H 2022.</p>
                        <img src={ProjectPineapple} alt='Project Pineapple Img' 
                            className=' border-4 border-teal-600 rounded-lg mx-auto -mt-16 scale-50'>
                        </img>

                    {/* <button className="col-span-1 min-h-[500px] content-div shadow-lg shadow-[#7493b8] group container 
                            rounded-md flex border justify-center bg-contain bg-no-repeat object-contain tracking-wider ">
                        
                        
                        <h2 className='text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Project Pineapple</h2>
                        <p className='text-black mt-3 text-lg md:text-xl 2xl:text-2xl'>Developed an IOS app that gives individuals the option of added security when going out 
                            for the night by scheduling check-ins at certain times to survey the wellbeing of the user. If the 
                            password is not submitted by the scheduled time, an alert will be sent to those that the user labeled 'contacts.'
                        </p>
                        <p className='text-red-500 text-base md:text-lg 2xl:text-xl'>Won second place with this project at H4H 2022.</p>
                    <img src={ProjectPineapple} alt='Project Pineapple Img' 
                        className=' border-4 border-teal-600 rounded-lg mx-auto mt-4'>
                    </img>
                    </button> */}
    
                   
                </button>
                
                                
            </div>

            





        </div>
        
    </div>
  )
}

export default Projects