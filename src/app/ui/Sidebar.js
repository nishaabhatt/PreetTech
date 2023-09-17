import React from 'react'
import {RiCloseFill} from 'react-icons/ri'

const Sidebar = ({isOpen,toggleSidebar}) => {
  return (
    <div className={`w-screen h-screen ${isOpen ? "fixed":"hidden"} top-0 left-0 bg-bgcolor
    z-20 text-primary grid place-items-center`}>

        <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-24px hover:cursor-pointer'
        onClick={toggleSidebar}>
            <RiCloseFill className='text-4xl'/>
        </div>

        <div className='flex flex-col gap-4 text-[24px]'>
            <a className='hover:text-blueLight' href='#'>Home</a>
            <a className='hover:text-blueLight' href='about'>About us </a>
            <a className='hover:text-blueLight' href='contact'>Contact us</a>
            <a className='hover:text-blueLight' href='policy'>Privacy Policy</a>
            <a className='hover:text-blueLight' href='blog'>Blog</a>
        </div>
    </div>
  )
}

export default Sidebar
