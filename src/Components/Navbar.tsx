import React, {useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
// import {Link} from 'react-scroll'

const NavBar = () => {
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)

    return (
        <div className='bg-white fixed w-full h-[70px] flex items-center px-4 text-black'>
            {/* regular list */}
                <ul className='hidden md:flex'>
                    <li><a href="#Hero">Home</a></li>
                    |
                    <li><a href="#AboutMe">About Me</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            {/* mobile */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!navbar ? <FaBars/> : <FaTimes/>}
            </div>
            {/* mobile list */}
            <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7393B3] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><a href="#Hero">Home</a></li>
                <li className='py-6 text-4xl'><a href="#AboutMe">About Me</a></li>
                <li className='py-6 text-4xl'><a href="#AboutMe">Resume</a></li>
                <li className='py-6 text-4xl'><a href="#AboutMe">Projects</a></li>
                <li className='py-6 text-4xl'><a href="#Contact">Contact</a></li>
            </ul>

        </div>
    )
}
export default NavBar