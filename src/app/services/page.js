'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {BiChevronRight} from 'react-icons/bi';
import AOS from 'aos'
import "aos/dist/aos.css"

const servicesContent = {
    heading: {
        headingSubTitle: "Services we provide",
        headingTitle: "Our Services Include",
        headingDescription: "Experience tailored excellence through Preet Tech’s array of services – from web development to digital marketing – where innovation meets your aspirations for success.",
    },
    items: [
        {
            icon: "/images/icon1.png",
            title: "Social Media Marketing",
            description: "Maximize Impact With Social Media Marketing",
        },
        {
            icon: "/images/icon2.png",
            title: "Goggle Ads",
            description: "Maximize Impact With Google ads",
        },
        {
            icon: "/images/icon3.png",
            title: "Website ",
            description: "Maximize Impact With Website",
        },

    ],

    cta: {
        cta_href: "#_",
        cta_label: "learn more"
    }

}

const Services = () => {

    useEffect(() => {
        AOS.init({
          duration: 700,
          easeing: 'slide',
          once: true
        })
      })

  return (
    
     <section className='py-20 bg-light'>
        <div className='container px-40  mx-auto'>
            <div className='max-w-xl  mx-auto text-center mb-20'>
            {servicesContent.heading.headingSubTitle && (  
               <span className="inline-block py-0.5  z-50 pl-3 text-heading 
                   font-semibold relative mb-7 " data-aos="fade-up" data-aos-delay="130">
                    {servicesContent.heading.headingSubTitle} 
                </span>
             )} 
                
            {servicesContent.heading.headingTitle && (  
             <h2 className='text-heading text-5xl lg:text-5xl font-bold mb-5' data-aos="fade-up" data-aos-delay="130">
                {servicesContent.heading.headingTitle} 
             </h2>   
             )}  
        
            </div>

           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
             {servicesContent.items.map((item, idx) => (
                <div key={idx} className='flex space-x-10 key={item.title} '>
                    <div className='w-14 shrink-0'>
                        <span className='inline-flex items-center justify-center p-2 w-[70px] h-[70px]
                        rounded-lg bg-white shadow-2xl'>
                            <Image src={item.icon} width={62} height={62} alt='joefreycodes.com'
                             data-aos="fade-up" data-aos-delay="130"/>
                        </span>
                    </div>
                    <div>
                        {item.title && (
                            <h3 className='text-heading font-bold text-md mb-3'>{item.title}</h3>
                        )}
                            {item.description && (
                            <p className='leading-relaxed'>{item.description}</p>
                        )}
                        {servicesContent.cta.cta_label && (
                       <Link href={servicesContent.cta.cta_href } className='flex space-x-2 outline-none
                       items-center font-semibold pt-5 text-primary group'>
                        <span>{servicesContent.cta.cta_label }</span>
                        <span className='w-6 h-6 rounded-full bg-primary text-white inline-flex items-center 
                        justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary'>
                            <BiChevronRight className='text-lg'/>
                        </span>
                        
                       </Link>
                    )}
                    </div>
                </div>
             ))}
           </div>
        </div>
     </section>
  )
}

export default Services