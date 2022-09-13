import React, { useState } from 'react'
import ProjectPineapple from "../Images/SC Project Pineapple.png"
import ProjectPineappleLogo from "../Images/ProjectPineappleLogo.jpeg"
import ProjectAboutMe from "../Images/SC About Me Website 2.png"
import ProjectFinLit from "../Images/SC FinLit Game.png"
import ProjectSmartWalk from "../Images/SC SmartWalk.png"
import Modal from './Modal'



const Projects = () => {
    const [isOpen, setIsOpen] = useState(0);

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
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* project 1 */}
                {/* title and button that shows modal */}
                <div className=''>
                    <h2 className='bg-blue-200 text-2xl text-center'>Project Pineapple</h2>
                    {/* button container w/ hover effects*/}
                    <button className="content-div shadow-lg shadow-[#7493b8] group container rounded-md flex border justify-center 
                    bg-contain bg-no-repeat object-contain tracking-wider" 
                        onClick={() => setIsOpen(1)} 
                        style={{backgroundImage: `url(${ProjectPineappleLogo})`}}>
                        Click for more info
                    </button>
                    
                    {isOpen == 1 && (<Modal setIsOpen={() => setIsOpen(0)}>
                    <div className='text-left mx-8 md:mx-10'>
                        <h2 className='text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Project Pineapple</h2>
                        <p className='text-black mt-3 text-lg md:text-xl 2xl:text-2xl'>Developed an IOS app that gives individuals the option of added security when going out 
                            for the night by scheduling check-ins at certain times to survey the wellbeing of the user. If the 
                            password is not submitted by the scheduled time, an alert will be sent to those that the user labeled 'contacts.'
                        </p>
                        <p className='text-red-500 text-base md:text-lg 2xl:text-xl'>Won second place with this project at H4H 2022.</p>
                    </div>
                    <img src={ProjectPineapple} alt='Project Pineapple Img' 
                        className=' border-4 border-teal-600 rounded-lg mx-auto mt-4 sm:mt-3 md:-mt-4 md:scale-[80%] lg:scale-[65%] lg:-mt-14 xl:-mt-18 xl:scale-[75%] 2xl:-mt-14 2xl:scale-[70%]'>
                    </img>
                    </Modal>)}
                </div>
                {/* project 2 */}
                {/* title and button that shows modal */}
                <div className=''>
                    <h2 className='bg-orange-200 text-2xl text-center'>Personal Website</h2>
                    {/* button container w/ hover effects*/}
                    <button className="content-div shadow-lg shadow-[#7493b8] group container rounded-md flex border justify-center 
                    bg-contain bg-no-repeat object-contain tracking-wider" 
                        onClick={() => setIsOpen(2)} 
                        style={{backgroundImage: `url(${ProjectAboutMe})`}}>
                        Click for more info
                    </button>
                    
                    {isOpen == 2 && (<Modal setIsOpen={() => setIsOpen(0)}>
                    <div className='text-left mx-8 md:mx-10'>
                        <h2 className='text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Personal Website</h2>
                        <p className='text-black mt-3 text-lg md:text-xl 2xl:text-2xl'>Created own personal website to display 
                        personal information, resume, programming projects, and contact information.
                        </p>
                    </div>
                    <img src={ProjectPineapple} alt='Project Pineapple Img' 
                        className=' border-4 border-teal-600 rounded-lg mx-auto mt-4 sm:mt-3 md:-mt-4 md:scale-[80%] lg:scale-[65%] lg:-mt-14 xl:-mt-18 xl:scale-[75%] 2xl:-mt-14 2xl:scale-[70%]'>
                    </img>
                    </Modal>)}
                </div>
                {/* project 3 */}
                {/* title and button that shows modal */}
                <div className=''>
                    <h2 className='bg-blue-200 text-2xl text-center'>Financial Literacy Game</h2>
                    {/* button container w/ hover effects*/}
                    <button className="content-div shadow-lg shadow-[#7493b8] group container rounded-md flex border justify-center 
                    bg-contain bg-no-repeat object-contain tracking-wider" 
                        onClick={() => setIsOpen(3)} 
                        style={{backgroundImage: `url(${ProjectFinLit})`}}>
                        Click for more info
                    </button>
                    
                    {isOpen == 3 && (<Modal setIsOpen={() => setIsOpen(0)}>
                    <div className='text-left mx-8 md:mx-10'>
                        <h2 className='text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Financial Literacy Game</h2>
                        <p className='text-black mt-3 text-lg md:text-xl 2xl:text-2xl'>Constructed an educational game aimed to teach 
                        kids ages 6-14 the importance of saving and investing money to solve the financial literacy crisis in the U.S. 
                        </p>
                    </div>
                    <img src={ProjectPineapple} alt='Project Pineapple Img' 
                        className=' border-4 border-teal-600 rounded-lg mx-auto mt-4 sm:mt-3 md:-mt-4 md:scale-[80%] lg:scale-[65%] lg:-mt-14 xl:-mt-18 xl:scale-[75%] 2xl:-mt-14 2xl:scale-[70%]'>
                    </img>
                    </Modal>)}
                </div>
                                
            </div>

            






            {/* end of title & used back quotes below (template literal tho) */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                project 1
                {/* card container (content-div is custom) */}
                <div style={{backgroundImage: `url(${ProjectPineapple})`}} className='shadow-lg shadow-[#7493b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    hover effects
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            My Project Name
                        </span>
                        <div className='pt-8'>
                            project will open in modal:
                            <button className="border-black border" onClick={() => setIsOpen(4)}>Show me more!</button>
                            {isOpen == 4 && (<Modal setIsOpen={() => setIsOpen(0)}>
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
                        </div>
                    </div>
                </div>

                {/* project 2 */}
                {/* card container (content-div is custom)*/}
                <div style={{backgroundImage: `url(${ProjectPineapple})`}} className='shadow-lg shadow-[#7493b8] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    hover effects
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            My Project Name
                        </span>
                        <div className='pt-8'>
                            {/* project will open in modal: */}
                            <button className="border-black border" onClick={() => setIsOpen(5)}>Show me more!</button>
                            {isOpen == 5 && (<Modal setIsOpen={() => setIsOpen(0)}>
                                <div className='text-left mx-8 md:mx-10'>
                                    <h2 className='text-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Personal Website</h2>
                                    <p className='text-black mt-3 text-lg md:text-xl 2xl:text-2xl'>Created own personal website to display 
                                        personal information, resume, programming projects, and contact information.
                                    </p>
                                </div>
                                <img src={ProjectPineapple} alt='Project Pineapple Img' 
                                    className=' border-4 border-teal-600 rounded-lg mx-auto mt-4 sm:mt-3 md:-mt-4 md:scale-[80%] lg:scale-[65%] lg:-mt-14 xl:-mt-18 xl:scale-[75%] 2xl:-mt-14 2xl:scale-[70%]'>
                                </img>
                            </Modal>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects