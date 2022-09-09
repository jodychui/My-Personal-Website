import React from 'react'
import ProfilePic from "../Images/HeadshotMaskGroup.png"

const AboutMe = () => {
  return (
    <div id='AboutMe' className='w-full pb-16 bg-[#D1CAC1] text-indigo-900'>
        <div className='pt-8 md:pt-16 mx-auto flex-col text-center'>
            <h1 className='text-5xl text-center font-bold inline border-b-4 border-pink-600 2xl:text-7xl'>About Me</h1>
        </div>
        {/* both sections */}
        <div className='text-center'>
            {/* let me introduce myself section */}
            <h2 className='text-2xl my-8 text-indigo-700 font-semibold 2xl:text-3xl'>Let Me Introduce Myself</h2>
            <div className='flex flex-col justify-center items-center'>
                <img src={ProfilePic} alt='ProfilePicture' 
                    className='rounded-full w-72 h-72 items-center'>
                </img>
                <p className='justify-center items-center mx-6 text-lg max-w-[1350px] md:text-xl lg:text-2xl text-indigo-900'>
                Hi, I’m Jodi. I am pursuing a B.S. in Computer Science and minoring in Entrepreneurship and 
                Mathematics. At the moment, I am a software engineer intern at a crypto startup called Drem, 
                where I mainly work on coding the front end. Although I currently have a job, I am open to a 
                new software engineering/product management/program management role. My interests have been 
                coding the front end; however, I am also interested in working more with the back end. In general, 
                I am a very outdoorsy and sporty person. When I’m not programming, I love playing golf, badminton, 
                tennis, and traveling. Feel free to connect with me on LinkedIn or contact me!
                </p>
            </div>
            {/* skills section */}
            <h2 className='text-2xl my-6 text-indigo-700 font-semibold 2xl:text-3xl'>Skills</h2>
            <div className='justify-center flex items-center text-indigo-900'>
                <div className='mx-1 md:mx-2 text-lg font-base border-solid border-[#A36A00] border-2 rounded-lg lg:mx-5 p-2 2xl:text-xl'>
                    <p>C++</p>
                </div>
                <div className='mx-1 md:mx-2 text-lg font-base border-solid border-[#A36A00] border-2 rounded-lg lg:mx-5 p-2 2xl:text-xl'>
                    <p>JS/TS/React</p>
                </div>
                <div className='mx-1 md:mx-2 text-lg font-base border-solid border-[#A36A00] border-2 rounded-lg lg:mx-5 p-2 2xl:text-xl'>
                    <p>Tailwind CSS</p>
                </div>
                <div className='mx-1 md:mx-2 text-lg font-base border-solid border-[#A36A00] border-2 rounded-lg lg:mx-5 p-2 2xl:text-xl'>
                    <p>HTML/CSS</p>
                </div>
                <div className='mx-1 md:mx-2 text-lg font-base border-solid border-[#A36A00] border-2 rounded-lg lg:mx-5 p-2 2xl:text-xl'>
                    <p>Figma</p>
                </div>
                
            </div>
            
            
        </div>
    </div>
  )
}

export default AboutMe