import React from 'react'
// import ProfilePic from '../Images/headshot.JPG'

const AboutMe = () => {
  return (
    <div id='AboutMe' className='w-full h-screen bg-[#D1CAC1] text-indigo-900'>
        <div className='mx-auto flex-col text-center pt-20'>
            <h1 className='text-5xl font-bold inline border-b-4 border-pink-600'>About Me</h1>
        </div>

        {/* Let Me Introduce Myself */}
        <div className='ml-16'>
            <h2 className='text-2xl my-12 text-indigo-900'>Let Me Introduce Myself</h2>
            <p className='max-w-[700px] text-indigo-900 text-xl'>Hi, I’m Jodi. I am currently pursuing a B.S. in Computer Science and minoring in Entrepreneurship and 
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
            {/* <img src={ProfilePic} alt='ProfilePicture'></img> */}
            {/* skills section */}
            <h2 className='text-2xl my-12 text-indigo-900'>Skills</h2>
            <div className='flex justify-start items-center text-indigo-900'>
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