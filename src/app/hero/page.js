'use client'
import React, {useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos'
import "aos/dist/aos.css"

const heroContent = {
    text: {
        subheading: "An IT Company",
        heading: "Discover The Future Of Technology: Your Path To Success Starts HereTechUp",
        description: "Join us on a transformative journey where technology meets ambition, unlocking endless possibilities for your business growth and innovation.",
    },
    images: {
        img1: '/images/hero_sec.svg',
        img2: '/images/img2.svg',
        img3: '/images/img3.svg',
        img4: '/images/img4.svg',
        img5: '/images/img5.svg',  
    }
}

const Hero = () => {

    useEffect(() => {
        AOS.init({
          duration: 500,
          easeing: 'slide',
          once: true
        })
      })

  return (
    <section className='md:py-20 md:pb-20 bg-bgcolor overflow-x-hidden'>
        <div className='container px-4 mx-auto overflow-x-hidden'>
           <div className='lg: flex justify-between items-center'>
            <div className='lg: w-5/12 mb-10 lg:mb-0 '>
            {heroContent.text.subheading  && (<span className="inline-block py-0.5 pl-3 text-xl text-heading text-body mb-30
            font-semibold relative mb-7 before:content-['']
                 before: absolute before:w-2/3 before:bg-yellowLight
                before:left-0 before:top-0 before:bottom-0 before:z-[-1] " data-aos="fade-up" data-aos-delay="50">
                    {heroContent.text.subheading} </span>)} 

                    {heroContent.text.heading && (<h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7"
                     data-aos="fade-up" data-aos-delay="50">{heroContent.text.heading}</h1>)}  
                   
                    {heroContent.text.description && (<p className="leading-relaxed text-body mb-20 text-xl"
                    data-aos="fade-up" data-aos-delay="50">{heroContent.text.description}</p>)}
                     
                     <div className="flex space-x-3">
                        
                     <Link href="#_" className="py-4 px-5 bg-primary text-lg text-white rounded-lg duration-300
                        transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0
                         hover:top-1 ">Get Started</Link>

                     <Link href="#_" className="py-4 px-5 bg-secondary text-lg text-white rounded-lg duration-300
                        transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0
                         hover:top-1 ">How it works?</Link>
                     </div>
            </div>
            <div className="lg:w-6/12 space-y-2">
                <div className="flex space-x-2 items-stretch">
                    <div className="w-8/12">
                        {heroContent.images.img1 && (
                            <Image src={heroContent.images.img1} width={397} height={406} alt="joefreycodes.com"
                            className="object-cover h-full w-full rounded-2xl" data-aos="flip-down" 
                            data-aos-delay="450"/>
                        )}
                    </div>
                    <div className="w-4/12 self-end space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                            {heroContent.images.img2 && (
                                <div> 
                                    <Image src={heroContent.images.img2} width={437} height={437} alt="joefreycodes.com"
                                    className="object-cover h-full w-full rounded-2xl" data-aos="zoom-in"
                                    data-aos-delay="200"/>
                                </div>
                            )}
                            <div className="bg-blueLight rounded-2xl rounded-tr-[200px]"></div>
                        </div>
                        {heroContent.images.img4 && (
                            <div> 
                            <Image src={heroContent.images.img4} width={374} height={392} alt="joefreycodes.com"
                            className="object-cover h-full w-full rounded-2xl" data-aos="fade-up"
                            data-aos-delay="250" />
                        </div>
                        )}
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="grid grid-cols-4 gap-2">
                        <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                        {heroContent.images.img5 && (
                            <div> 
                            <Image src={heroContent.images.img5} width={394} height={394} alt="joefreycodes.com"
                            className="object-cover h-full w-full rounded-2xl" 
                            />
                        </div>
                        )}
                    </div>
                </div>
                <div className="w-5/12">
                    {heroContent.images.img6 && (
                         <div> 
                         <Image src={heroContent.images.img6} width={446} height={495} alt="joefreycodes.com"
                         className="object-cover h-full w-full rounded-2xl" />
                     </div>
                    )}
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Hero