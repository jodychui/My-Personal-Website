import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import Backdrop from '@mui/material/Backdrop';
// import Backdrop from '@material-ui/core/Backdrop';

export type ModalProperties = {
    setIsOpen: () => any,
    children?: JSX.Element | JSX.Element[]
}

const Modal = ({setIsOpen, children}: ModalProperties) => {
  return (
    <div>
        <Backdrop onClick={setIsOpen} open={true} >
            <div onClick={(e) => {e.stopPropagation()}} className={"bg-white border-2 border-teal-400 rounded-2xl w-8/12 h-5/6"}>
                <button className='ml-4 mt-4' onClick={setIsOpen}>
                    {/* this is the x button to exit modal (can also click gray area to exit) */}
                    {!setIsOpen ? <FaBars/> : <FaTimes/>}
                </button>

                {children}
                
            </div>
        </Backdrop>


    </div>

  )
}

export default Modal