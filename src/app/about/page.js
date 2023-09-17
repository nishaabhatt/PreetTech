import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const aboutContent = {
    heading: {
        headingSubtitle : "About Us",
        headingTitle: "Discover Our Story Of Innovation And Excellence",
    },
    content: {
        contentParagraphOne: "Unleash Your Potential with Preet Tech: Your IT Solution Partner",
        contentParagraphTwo: "At Preet Tech, we’re here to propel your business forward in the digital age. Our passion for innovation drives us to deliver cutting-edge IT solutions that elevate your brand and streamline your operations. Discover how we can transform your digital landscape and embark on a journey to success together.",
    },
    image: {
        img1:"/images/img11.jpg",
        img2:"/images/icon4.png"
    },
    cta: {
        href:"#_",
        label: "Learn More",
    }
}

const About = () => {
  return (
   <section id='about' className='py-20 pb-30 bg-bgcolor overflow-x-hidden'>
    <div className='container px-4 mx-auto'>
        <div className='lg:flex justify-between space-x-3 '>
            <div className='w-6/12 flex flex-col space-y-2 border-solid'>
            <div className='border-solid border-4 border-primary rounded-lg hover:border-orange 
            hover:border-dotted hover:animate-pulse'>
                <Image src={aboutContent.image.img1} height={640} width={626} alt='joefreycodes.com'
                className='object-cover h-full w-full rounded-lg '/>
            </div>
            </div>
            
            <div className='lg:w-5/12 relative z-10'>
                {aboutContent.heading.headingSubtitle && (
                    <span className='inline-block pl-3 py-0.5 z-50 pt-15 text-heading 
                    font-semibold relative mb-7 '>{aboutContent.heading.headingSubtitle}</span>
                )}
                {aboutContent.heading.headingTitle && (
                    <h2 className='heading font-bold text-4xl lg:text-4xl'>{aboutContent.heading.headingTitle}</h2>
                )}
                {aboutContent.content.contentParagraphOne && (
                    <p className='text-body pt-10 text-xl leading-relaxed '>{aboutContent.content.contentParagraphOne}</p>
                )}
                 {aboutContent.content.contentParagraphTwo && (
                    <p className='text-body pt-10 text-xl leading-relaxed '>{aboutContent.content.contentParagraphTwo}</p>
                )}

                <div>
                    <Link href={aboutContent.cta.href} className='bg-primary inline-block text-bgcolor mt-20 text-lg
                    rounded-lg py-4 px-5 hover:bg-secondary tranition-all ease-in-out duration-300 relative hover:-top-1'>
                        {aboutContent.cta.label}</Link>
                </div>

           </div>
        </div>
    </div>
   </section>
  )
}

export default About