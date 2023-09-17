'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiCheck } from 'react-icons/bi'
import AOS from 'aos'
import "aos/dist/aos.css"


const VisionContent = {
    text: {
      headingSubtitle: 'Our Vision',
      headingTitle: "Shaping Tomorrow's Digital Landscape Today",
      heading2ndTitle: 'Your One-Stop Solution For Tech Excellence',
      headingDescription: 'Guided by a singular vision, Preet Tech aspires to be your ultimate one-stop solution, where innovation meets expertise to revolutionize your digital landscape.',
    },

    cta: {
        btn1: {
             href:"#_",
             label: "Learn More",
        }
    },
    
    images: {
      img1: "/images/img8.jpg",
      img2: "/images/img9.jpg",
      img3: "/images/icon4.png",
    },
}
// lg:mb-0 it is used to add responsivness(large screen size)
const Vision = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easeing: 'slide',
      once: true
    })
  })

  return (
    <section className='py-32 bg-bgcolor overflow-x-hidden'>
       <div className='container px-4 mx-auto'>
        <div className='lg:flex space-x-2 justify-between'>
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute 
          before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl
          before:py-28 before:-top-20 before:bg-white before:-bottom-20">
            <div className='flex gap-2'>
              <div className='flex flex-col space-y-2'>
                <div>
                  <Image src={VisionContent.images.img1} width={626} height={640} className='object-cover 
                  h-full w-full rounded-lg' alt='joefreycodes.com' data-aos="flip-right" data-aos-delay="200"/>
                </div>
                <div className='flex justify-end gap-2'>
                  <div className='w-4/12 flex'>
                    <div className='ml-auto'>
                    <div className='bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]'></div>
                    </div>
                  </div>
                  <div className='w-6/12'>
                    <Image src={VisionContent.images.img2} width={626} height={640} className='object-cover 
                  h-full w-full rounded-lg' alt='joefreycodes.com' data-aos="flip-right" data-aos-delay="200"/>
                  </div>
                </div>
              </div>

                <div className='mt-auto'>
                  <div className='flex flex-col gap-2'>
                    <div>
                      <div className='bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]'></div>
                    </div>

                    <div>
                    <Image src={VisionContent.images.img3} width={547} height={573} className='object-cover 
                  h-full w-full rounded-lg shadow-2xl' alt='joefreycodes.com' data-aos="flip-right" data-aos-delay="200" /></div>
                  </div>
                </div>

            </div>
          </div>
          <div className='lg:w-5/12 relative z-10'>
             {VisionContent.text.headingSubtitle && (
                <span className="inline-block py-0.5 z-50 mt-15 pl-3 text-heading 
                   font-semibold relative mb-7 ">
                    {VisionContent.text.headingSubtitle} 
                </span>
              )} 
              
              {VisionContent.text.headingTitle && (
                   <h2 className="text-heading text-5xl lg:text-5xl 
                   font-bold  mb-5 ">
                    {VisionContent.text.headingTitle} 
                </h2>
              )} 
             
             {VisionContent.text.heading2ndTitle && (
                   <h2 className="text-heading text-2xl lg:text-2xl 
                   font-bold pt-5 mb-5 ">
                    {VisionContent.text.heading2ndTitle} 
                </h2>
              )} 

             {VisionContent.text.headingDescription && (
                   <p className="text-body leading-relaxed
                     mb-10 pt-5 text-xl ">
                    {VisionContent.text.headingDescription} 
                </p>
              )}

          <div className='flex space-x-3'>
                <Link href={VisionContent.cta.btn1.href} className="py-4 px-5 bg-primary text-lg 
                text-white rounded-lg duration-300
                        transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block 
                        relative top-0
                         hover:-top-1 ">{VisionContent.cta.btn1.label}
                </Link>
            
        
          </div>
            
          </div>
        </div>
       </div>
    </section>
  )
}

export default Vision