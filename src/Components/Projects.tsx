import React, { useState } from 'react'
import ProjectPineapple from "../Images/SC Project Pineapple.png"
import ProjectAboutMe from "../Images/SC About Me Website 2.png"
import ProjectFinLit from "../Images/SC FinLit Game.png"
import ProjectSmartWalk from "../Images/SC SmartWalk.png"
import Modal from './Modal'



const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='Projects' className='w-full md:pb-16 text-blue-700'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            {/* title */}
            <div className='pt-8 md:pt-16 mx-auto flex-col text-center'>
                <h1 className='text-5xl text-center font-bold inline border-b-4 border-pink-600 2xl:text-7xl'>Projects</h1>
            </div>
            <h2 className='text-2xl mt-8 ml-4 text-orange-600 font-semibold md:my-8 2xl:text-3xl'>Check out some of my recent work</h2>


            {/* testing modal */}
            <button className="border-black border" onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && (<Modal setIsOpen={() => setIsOpen(false)}>
                        <div className='text-left mx-8 md:mx-10'>
                            <h2 className='text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Project Pineapple</h2>
                            <p className='text-black mt-3 text-lg md:text-xl 2xl:text-2xl'>Developed an IOS app that gives individuals the option of added security when going out 
                            for the night by scheduling check-ins at certain times to survey the wellbeing of the user. If the 
                            password is not submitted by the scheduled time, an alert will be sent to those that the user labeled 
                            'contacts.'</p>
                            <p className='text-red-500 text-base md:text-lg 2xl:text-xl'>Won second place with this project at H4H 2022.</p>
                        </div>
                        <img src={ProjectPineapple} alt='Project Pineapple Img' 
                            className=' border-4 border-teal-600 rounded-lg mx-auto mt-4 sm:mt-3 md:-mt-4 md:scale-[80%] lg:scale-[65%] lg:-mt-14 xl:-mt-18 xl:scale-[75%] 2xl:-mt-14 2xl:scale-[70%]'>
                        </img>
                        
                        
                    </Modal>)}




            {/* end of title & used back quotes below (template literal tho)*/}
            <div style={{backgroundImage: `url(${ProjectPineapple})`}}
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* card container (content-div is custom)*/}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            My Project Name
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button>Demo</button>
                            </a>
                            <a href="/">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects