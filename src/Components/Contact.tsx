import React from "react";
import { GoMail } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";


const Contact = () => {
    return (
        <div id='Contact' className='bg-[#D1CAC1] w-full pb-16 md:pb-16 text-black-700'>
            {/* title */}
            <div className='pt-8 md:pt-16 mx-auto flex-col text-center'>
                <h1 className='text-5xl text-center font-bold inline border-b-4 border-pink-600 2xl:text-7xl'>Contact</h1>
            </div>

            {/* title subheading note */}
            <div className='mx-auto pb-40 flex flex-col text-center'>
                <h2 className='text-4xl mt-12 ml-4 text-white font-medium md:mt-20 2xl:text-3xl'>I'd love to connect with you!</h2>
            </div>

            {/* icons */}
            <div className='-mt-40 flex place-content-center gap-x-80 grid md:grid-cols-2 scale-[78%] md:scale-[80%] md:-mt-10 lg:scale-[100%] m-2 lg:px-40'>
                {/* mail icon */}
                <div className=''>
                    <div className= 'flex justify-center'>
                        <GoMail size={300}/>
                    </div>
                    <h3 className='text-center text-2xl'>Email Me At:</h3>
                    <h3 className='text-center text-2xl'>jodychui7@gmail.com</h3>
                </div>
                {/* linkedin icon */}
                <div>
                    <div className= 'flex justify-center'>
                        <AiOutlineLinkedin size={300}/>
                    </div>
                    <h3 className='text-center text-2xl'>Lets Connect!</h3>
                </div>
            </div>


            {/* user fill in form */}
            <div className='flex justify-center items-center p-4 mt-12'>
                <form method="POST" action="https://getform.io/f/b1c8df9d-93f0-4bf3-9046-8afff62a6b11" className='max-w-[600px] w-full flex flex-col'>
                    {/* submission box text */}
                    <div className='text-xl text-amber-600 font-medium'>
                        <p>Submit the form below or click the email icon above to shoot me an email</p>
                    </div>
                    <input className='p-2' type="text" placeholder='Name' name='name'/>
                    <input className='my-4 p-2' type="email" placeholder='Email' name='email'/>
                    <textarea className='p-2' placeholder='Message' name="message" rows={10}></textarea>

                    <button className='text-black border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Send message!</button>
                </form>
            </div>
            


            {/* black bar on the bottom */}
           <div className='border-solid border-2 border-black bg-black text-right p-3 fixed inset-x-0 bottom-0'>
               <p className='text-xl font-thin mr-5 text-white sm:text-2xl md:text-3xl'>@ 2022, Designed by Jody Chui.</p>
           </div>

            
        </div>
            
    )
}

export default Contact