import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/plogo.png'
import {FiMenu} from "react-icons/fi"
{/**/}
const Navigation = ({toggleSidebar}) => {

  return (
    <div className='bg-bgcolor z-10 py-5  ' >
     <div className='container mx-auto flex justify-between items-center px-4'>
        <div className=''>
                    <Link href="/">
                        <Image src={logo} width={270} height={70} alt='FamSec Logo'/>
                    </Link>
         </div>

    <div className='hidden md:flex gap-6'>
         <ul
              className=' flex items-center justify-center gap-8 text-base text-xl'
            >
              <li className="cursor-pointer hover:text-primary hover:bg-greenLight
                                hover:rounded-lg transition-all ease-in-out">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer hover:text-primary hover:bg-greenLight
                                hover:rounded-lg transition-all ease-in-out">
                <Link href="about" >About us</Link>
              </li>
              <li className="cursor-pointer hover:text-primary hover:bg-greenLight
                                hover:rounded-lg transition-all ease-in-out">
                <Link href="contact">Contact us</Link>
              </li>
              <li className="cursor-pointer hover:text-primary hover:bg-greenLight
                                hover:rounded-lg transition-all ease-in-out">
                <Link href="policy">Privacy Policy</Link>
              </li>
              <li className="cursor-pointer hover:text-primary hover:bg-greenLight
                                hover:rounded-lg transition-all ease-in-out">
                <Link href="blog">Blog</Link>
              </li>
            </ul>
    </div>

    <a href="/" className='hidden px-3 py-2 bg-primary text-white text-lg rounded-lg hidden lg:inline-block
                    transition-all ease-in-out hover:bg-secondary hover:shadow-lg inline-block relative top-0
                    hover:top-1'> Get Started</a>

     <div className='md:hidden  text-[24px]' onClick={toggleSidebar} >
        <FiMenu />
      </div>

     </div>

</div>
  
  )
}

export default Navigation