import Link from 'next/link'
import React from 'react'

const aboveContent ={
    heading: {
        subheading: "Explore Our Free Consultation.",
        headingTitle: "Unlock Your Business Potential With Our Free Consultation"
    },
    cta : {
        btn1: {
            label: "LEARN MORE",
            href: "contact",
        }
    }
}

const AboveF = () => {
  return (
    <section className='bg-bgcolor py-20 '>
        <div className='container mx-auto px-4 '>
        <div className='bg-[#E0FFFF] max-w-7xl mx-auto text-center mb-15 mt-15 hover:border-2 hover:border-primary
         '>
            {aboveContent.heading.subheading && (
                <span className='inline-block text-heading font-semibold pt-10'>{aboveContent.heading.subheading}</span>
            )}

            {aboveContent.heading.headingTitle && (
                <h1 className='text-heading text-5xl font-bold leading-relaxed pt-10'>
                    {aboveContent.heading.headingTitle}
                </h1>
            )}
        
          <div className='pt-10 pb-10'>
            <Link href={aboveContent.cta.btn1.href} className="py-4 px-5 bg-primary text-lg 
                text-white rounded-lg duration-300
                        transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block 
                        relative top-0
                         hover:-top-1 ">
                {aboveContent.cta.btn1.label}</Link>
          </div>

        </div>
        </div>
    </section>
  )
}

export default AboveF