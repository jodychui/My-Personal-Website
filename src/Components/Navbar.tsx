import React, {useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-black'>
            {/* regular list */}
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            {/* mobile */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!navbar ? <FaBars/> : <FaTimes/>}
            </div>
            {/* mobile list */}
            <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7393B3] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About Me</li>
                <li className='py-6 text-4xl'>Resume</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

        </div>
    )
}
export default NavBar