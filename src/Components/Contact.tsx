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

            {/* note */}
            <div className='mx-auto pb-40 flex flex-col text-center'>
                <h2 className='text-6xl mt-8 ml-4 text-white font-medium md:my-8 2xl:text-3xl'>I'd love to connect with you!</h2>
            </div>


            {/* icons */}
            <div className='flex place-content-center gap-x-80'>
                {/* mail icon */}
                <div>
                    <GoMail size={300}/>
                    <h3 className='text-center text-2xl'>Email Me At jodychui7@gmail.com</h3>
                </div>
                {/* linkedin icon */}
                <div>
                    <AiOutlineLinkedin size={300}/>
                    <h3 className='text-center text-2xl'>Lets Connect!</h3>
                </div>
            </div>

            {/* black bar on the bottom */}
           <div className='border-solid border-2 border-black bg-black text-right mt-44 p-3'>
               <p className='mr-5 text-white text-3xl font-thin'>@ 2022, Designed by Jody Chui.</p>
           </div>

            
        </div>
            
    )
}

export default Contact