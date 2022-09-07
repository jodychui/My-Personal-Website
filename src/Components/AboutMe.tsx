import React from 'react'
import ProfilePic from "../Images/HeadshotMaskGroup.png"

const AboutMe = () => {
  return (
    <div id='AboutMe' className='w-full h-screen bg-[#D1CAC1] text-indigo-900'>
        <div className='mx-auto flex-col text-center pt-20'>
            <h1 className=' sm:text-5xl text-center md:text-3xl lg:text-5xl font-bold inline border-b-4 border-pink-600'>About Me</h1>
        </div>

        {/* Let Me Introduce Myself */}
        <div className='md:ml-6 lg:ml-12 xl:ml-16 2xl: ml-28'>
            <h2 className='sm:text-2xl my-12 text-indigo-900 font-semibold'>Let Me Introduce Myself</h2>
            <div className='sm:flex'>
                <img src={ProfilePic} alt='ProfilePicture' className='sm:content-center md:w-50 h-50 mt-16 lg:ml-8 xl:ml-12 mr-12 2xl:ml-20 rounded-full w-72 h-72 '></img>
                <p className='md:ml-8 text-base lg:text-2xl mr-20 xl:max-w-[1000px] text-indigo-900 '>Hi, I’m Jodi. I am currently pursuing a B.S. in Computer Science and minoring in Entrepreneurship and 
                    Mathematics. At the moment, I am a software engineer intern at a crypto startup called Drem where 
                    I mainly work on coding the front end. Although I currently have a job, I am open to a new software 
                    engineering/product management/program management role. My interests have been coding front end from 
                    React, Javascript, Swift, HTML/CSS, and Flutter. However, I am also interested in working more with 
                    the backend, such as focusing on databases and servers as well as working with API’s. Management and 
                    leadership roles have always been a passion of mine, so I have been taking on these roles in school 
                    clubs. From being the Outreach Coordinator and Underclassmen Representative of SCU’s ACM club to being 
                    the Captain of my high school’s girl's golf and co-ed badminton team. In general, I am a very outdoorsy 
                    and sporty person. When I’m not programming, I love playing golf, badminton, tennis, biking, hiking, 
                    and traveling. Feel free to connect with me on LinkedIn or contact me!
                </p>
                
            </div>
            
            
            {/* skills section */}
            <h2 className='md:mt-4 mb-5 lg: my-12 text-indigo-900 text-2xl font-semibold'>Skills</h2>
            <div className='md:ml-5 flex justify-start items-center text-indigo-900'>
                <div className='border-solid border-[#A36A00] border-2 rounded-lg mx-5 p-2'>
                    <p>C++</p>
                </div>
                <div className='border-solid border-[#A36A00] border-2 rounded-lg mx-5 p-2'>
                    <p>JS/TS/React</p>
                </div>
                <div className='border-solid border-[#A36A00] border-2 rounded-lg mx-5 p-2'>
                    <p>Tailwind CSS</p>
                </div>
                <div className='border-solid border-[#A36A00] border-2 rounded-lg mx-5 p-2'>
                    <p>HTML/CSS</p>
                </div>
                <div className='border-solid border-[#A36A00] border-2 rounded-lg mx-5 p-2'>
                    <p>Figma</p>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default AboutMe