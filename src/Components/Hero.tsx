import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from'react-icons/bs';
import {HiArrowNarrowRight} from 'react-icons/hi'
// import HeroBackground from "../Images/lakeComoBackground.jpg"

const Hero = () => {
  return (
    <>
          {/* body */}
          <div id='hero' className='w-full h-screen bg-[#94A4B4]'>
            {/* <img src={HeroBackground} alt='backgroundPicture'></img> */}
              <div className='mx-auto pb-40 flex flex-col justify-center h-full text-center'>
                  <p className='text-black mt-52'>Hi there, thanks for visiting my website!</p>
                  <h1 className='text-6xl sm:text-8xl font-bold text-neutral-100 my-6'>Jody Chui</h1>
                  <h2 className='text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-400 mt-80'>
                      Student at Santa Clara University | Software Engineer | Entrepreneur
                  </h2>
                  {/* <p className='text-black mt-10'>Background picture: Lake Como, Italy by Jody Chui</p> */}


                  {/* socials/contacts */}
                  <ul className='shrink flex mt-20 mx-auto'>
                    {/* LinkedIn */}
                    <li className='w-[60px] h-[60px] mt-5 flex justify-between items-center bg-blue-600'>
                        <a className='flex justify-between items-center w-full'
                        href="/">
                            <FaLinkedin size={30}/>
                        </a>
                    </li>
                    {/* Github */}
                    <li className='w-[60px] h-[60px] mt-5 flex justify-between items-center bg-[#5A5A5A]'>
                        <a className='flex justify-between items-center w-full'
                        href="/">
                            <FaGithub size={30}/>
                        </a>
                    </li>
                    {/* Email */}
                    <li className='w-[60px] h-[60px] mt-5 flex justify-between items-center bg-[#AFE1AF]'>
                        <a className='flex justify-between items-center w-full'
                        href="/">
                            <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    {/* Resume */}
                    <li className='w-[60px] h-[60px] mt-5 flex justify-between items-center bg-[#E4D00A]'>
                        <a className='flex justify-between items-center w-full'
                        href="/">
                            <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                  </ul>
              </div>
              
          </div>

          
          
    </>

  )
}

export default Hero