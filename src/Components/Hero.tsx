import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen bg-[#D1CAC1]'>
        <div className='mx-auto pb-40 flex flex-col justify-center h-full text-center'>
            <p className='text-black'>Hi there, thanks for visiting my website!</p>
            <h1 className='text-5xl sm:text-8xl font-bold text-neutral-100'>Jody Chui</h1>
            <h2 className='text-xs sm:text-xl lg:text-3xl xl:text-4xl font-bold text-slate-400'>
                Student at Santa Clara University | Software Engineer | Entrepreneur
            </h2>
            <p className='text-black'>background picture: Lake Como, Italy by Jody Chui</p>
        </div>
    </div>
  )
}

export default Hero