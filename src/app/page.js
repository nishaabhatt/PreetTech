'use client'
import Image from 'next/image'
import Hero from './hero/page'
import Stats from './stats/page'
import Services from './services/page'
import Vision from './vision/page'
import OurSkill from './skill/page'
import RecentBlog from './blog/page'
import About from './about/page'
import AboveF from './aboveFooter/page'
import {useState} from 'react'


export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar= () => {
    setIsOpen(!isOpen)
  }

  return (

  <div>
  

     <main>
    {/*  <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/> */}
       <Hero />
       <Stats />
       <About />
       <Services />
       <Vision />
       <OurSkill />
       <RecentBlog />
     
     </main>

 
     </div> 
  )
}
