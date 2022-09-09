import React from 'react'
import ProjectPineapple from "../Images/SC Project Pineapple.png"
import ProjectAboutMe from "../Images/SC About Me Website 2.png"
import ProjectFinLit from "../Images/SC FinLit Game.png"
import ProjectSmartWalk from "../Images/SC SmartWalk.png"



const Projects = () => {
  return (
    <div id='Projects' className='w-full md:h-screen text-blue-700'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* title */}
            <div className='pt-8 md:pt-16 mx-auto flex-col text-center'>
                <h1 className='text-5xl text-center font-bold inline border-b-4 border-pink-600 2xl:text-7xl'>Projects</h1>
            </div>
            <h2 className='text-2xl mt-8 ml-4 text-orange-600 font-semibold md:my-8 2xl:text-3xl'>Check out some of my recent work</h2>
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