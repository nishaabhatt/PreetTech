'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
import AOS from 'aos'
import "aos/dist/aos.css"

const skillContent = {
    heading: {
        headingSubtitle :'Our Skills ',
        headingTitle : 'Meet Our Main Skills',
        headingDescription : "Explore our main skills – a fusion of expertise and innovation, poised to elevate your digital presence and drive success",
    },

    images: {
       img1: "/images/img10.jpg",
    },
    writeInImage: {
        subtitle:'Write to us.',
        title: 'What Can We Do? '
    }
    
}
const OurSkill = () => {

    useEffect(() => {
        AOS.init({
          duration: 700,
          easeing: 'slide',
          once: true
        })
      })

  return (
    <section className=' py-32 bg-bgcolor overflow-x-hidden'>
        <div className='container mx-auto px-4'>
           <div className='lg:flex space-x-2 justify-between'>
            <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute 
                before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl
                 before:-top-20 before:bg-skillImgBg bg-opacity-0 before:-bottom-20">     
            <div className='flex gap-2'>
            
                <div>
                  <Image src={skillContent.images.img1} width={626} height={640} className='object-cover 
                  h-full w-full rounded-lg' alt='joefreycodes.com'/>
                </div>
              
            </div> 
            </div> 
             <div className='lg:w-5/12 relative z-10'>
                {skillContent.heading.headingSubtitle && (
                    <span className="inline-block font-semibold py-0.5 z-50 pt-20   text-heading 
                     relative mb-7 ">
                        {skillContent.heading.headingSubtitle}
                    </span>
                )}

                {skillContent.heading.headingTitle && (
                    <h2 className="heading font-bold py-0.5 z-50 text-5xl lg:text-5xl text-heading 
                    pt-5 mb-5 ">
                        {skillContent.heading.headingTitle}
                    </h2>
                )}

                {skillContent.heading.headingDescription && (
                    <p className='text-body leading-relaxed
                    mb-10 pt-5 text-xl'>
                        {skillContent.heading.headingDescription}</p>
                )}
            
              <div>
                <p className='mb-2 font-medium'>Social Media Marketing</p>
                <div class="w-[50%] bg-skillC rounded-full mt-2 h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-[#FF00BF] h-2.5 rounded-full dark:bg-blue-500 w-[90%]"></div>
</div>
</div>
              <div>
                <p className='mt-4 mb-2 font-medium'>Web Development</p>
                <div className='w-[50%] bg-skillC rounded-full mt-2 h-2.5 mb-4'>
                    <div className='bg-[#FFC72C] h-2.5 rounded-full w-[60%]'
                    data-aos="flip-left" data-aos-delay="200"></div>
                </div>
              </div>
              <div>
                <p className='mt-4 mb-2 font-medium'>Google Ads</p>
                <div className='bg-skillC  rounded-full mt-2 h-2.5 mb-4 w-[50%] '>
                    <div className=' bg-[#018749] h-2.5 w-[70%] rounded-full'
                     data-aos="flip-left" data-aos-delay="200"></div>

                </div>
              </div>

             </div>
             </div> 
          </div> 
    </section>
  )
}

export default OurSkill