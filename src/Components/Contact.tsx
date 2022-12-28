import React from "react";
import { GoMail } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";


const Contact = () => {
    return (
        <div id='Contact' className='bg-[#D1CAC1] w-full h-screen md:pb-16 text-black-700'>
            {/* title */}
            <div className='pt-8 md:pt-16 mx-auto flex-col text-center'>
                <h1 className='text-5xl text-center font-bold inline border-b-4 border-pink-600 2xl:text-7xl'>Contact</h1>
            </div>

            {/* title subheading note */}
            <div className='mx-auto pb-40 flex flex-col text-center'>
                <h2 className='text-4xl mt-12 ml-4 text-white font-medium md:mt-20 2xl:text-3xl'>I'd love to connect with you!</h2>
            </div>

            {/* icons */}
            <div className='-mt-40 flex place-content-center gap-x-80 grid md:grid-cols-2 md:scale-[80%] md:-mt-10 lg:scale-[100%] m-2'>
                {/* mail icon */}
                <div className=''>
                    <GoMail size={300}/>
                    <h3 className='text-center text-2xl'>Email Me At:</h3>
                    <h3 className='text-center text-2xl'>jodychui7@gmail.com</h3>
                </div>
                {/* linkedin icon */}
                <div>
                    <AiOutlineLinkedin size={300}/>
                    <h3 className='text-center text-2xl'>Lets Connect!</h3>
                </div>
            </div>

            {/* black bar on the bottom */}
           <div className='border-solid border-2 border-black bg-black text-right p-3 fixed inset-x-0 bottom-0'>
               <p className='text-xl font-thin mr-5 text-white sm:text-2xl md:text-3xl'>@ 2022, Designed by Jody Chui.</p>
           </div>

            
        </div>
            
    )
}

export default Contact