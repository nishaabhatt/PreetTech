'use client';

import React, { useRef, useCallback, useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { BiChevronLeft, BiChevronRight} from 'react-icons/bi'

import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const blogContent = {
    heading: {
          headingSubtitle: 'Our Blog',
          headingTitle: 'Insights and Expertise',
    },
    RecentBlog: [
      {
        permalink: "blogone",
        featuredImg: "/images/image-11.png",
        title: "Digital Marketing In Haldwani",
        excerpt: "Preet Tech  is a institute where students may learn about cutting-edge internet marketing strategies and launch a career in the sector."
      },
      {
        permalink: "#_",
        featuredImg: "/images/image-12.png",
        title: "On Page And Off Page SEO",
        excerpt: "Preet Tech  is a institute where students may learn about cutting-edge internet marketing strategies and launch a career in the sector."
      },
      {
        permalink: "#_",
        featuredImg: "/images/image-13.png",
        title: "The Best Ways To Earn Money Using Digital Marketing",
        excerpt: "Preet Tech  is a institute where students may learn about cutting-edge internet marketing strategies and launch a career in the sector."
      },
      {
        permalink: "#_",
        featuredImg: "/images/img10.jpg",
        title: "hjgcshscbjakj",
        excerpt: "Preet Tech  is a institute where students may learn about cutting-edge internet marketing strategies and launch a career in the sector."
      },
    ],
    cta: {
        href: "#_",
        label: "To view all post",
        labelSuffix: "click here",
    }
}

const RecentBlog = () => {

   const [slideIndex, setSlideIndex ] = useState(0);
   const [isEnd, setIsEnd ] = useState(null);
   const [isBeginning, setIsBeginning ] = useState(null);
   const sliderRef  = useRef(null);

   useEffect(() => {
    setIsEnd(sliderRef.current?.swiper.isEnd);
    setIsBeginning(sliderRef.current?.swiper.isBeginning);

    console.log(slideIndex);
    console.log(isEnd);
    console.log(isBeginning);
   })

   const prevHandler = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
   })
   const nextHandler = useCallback(() => {
    if(!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
   })

  return (
    <section id='blog' className='py-20 bg-light overflow-x-hidden'>
        <div className='container  px-4 mx-auto'>
            <div className='lg:flex justify-between items-center mb-10 '>
                <div className='lg:w-5/12 mb-10 lg:mb-0'>
                   
                   {blogContent.heading.headingSubtitle && ( 
                    <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold realtive mb-7 ">
                        {blogContent.heading.headingSubtitle}
                    </span>
                   )}

                   {blogContent.heading.headingTitle && (
                    <h2 className='text-heading font-bold mb-5 text-5xl lg:text-5xl'>
                        {blogContent.heading.headingTitle}
                    </h2>
                   )}

                </div>

                <div className='lg:w-5/12 text-left lg:text-right '>
                   <div className='inline-flex ml-auto h-auto space-x-3'>
                    <div onClick={prevHandler} className={`${ isBeginning == true ? "opacity-30 bg-[#E1E7EA] cursor-auto" : 
                    "opacity-100 hover:bg-primary"} group transition-all duration-300 ease-in-out w-12 h-12
                    cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center
                    items-center`}>
                        <BiChevronLeft className={`text 3xl text-primary transition-all duration-300
                    ease-in-out group-hover:text-white ${isBeginning == true ? "group-hover:!text-primary" : 
                    "group-hover:text-white"}`} />
                    </div>
        

                   <div onClick={nextHandler} className={`${isEnd == true ? "opacity-30 bg-[#E1E7EA] cursor-auto" : 
                    "opacity-100 hover:bg-primary"} group transition-all duration-300 ease-in-out w-12 h-12
                    cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center
                    items-center`}>
                        <BiChevronRight className={`text 3xl text-primary transition-all duration-300
                    ease-in-out group-hover:text-white ${isEnd == true ? "group-hover: !text-primary" : 
                    "group-hover:text-white"}`} />
                    </div>
                   </div>
                </div>
            </div>
          <Swiper breakpoints={{
            640:{
                width:640,
                slidesPerView: 1,
            },
            768:{
                width:768,
                slidesPerView: 2,
            },
            968:{
                width:968,
                slidesPerView: 2,
            }
          }} 
          ref={sliderRef}
          speed={700}
          spaceBetween={30}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] 
           before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5
           before:-bottom-5 before:bg-light"
          >

          {blogContent.RecentBlog.map((blog,idx) => (
            <SwiperSlide className="overflow-visible h-full" key={blog.title}>
                <div className='p-5 rounded-lg bg-white relative mt-10 '>
                    <Link href={blog.permalink} className='relative-mt-10 inline-block
                    overflow-hidden rounded-lg mb-4'>
                        <Image src={blog.featuredImg} width={240} height={240} alt='' />
                    </Link>
                    <h2 className='text-heading text-lg font-bold leading-7 mb-5'>
                        <Link href={blog.permalink} className='relative text-heading'>
                            {blog.title}
                        </Link>
                    </h2>
                    <p className='realtive mb-6'>{blog.excerpt}</p>
            
                </div>
            </SwiperSlide>
          ))}

          </Swiper>

          <div className='mx-auto flex items-center justify-center'>
            <Link href={blogContent.cta.href} className='duration-300 transition-all ease-in-out py-3
            px-6 flex border-4 rounded-full space-x-3 items-center hover:border-gray-900'>
                {blogContent.cta.label}{" "}
                <strong className='text-primary pl-1 font-semibold'>
                    {blogContent.cta.labelSuffix}
                </strong>
                <span className='text-gray-300'></span>
                <span className='bg-primary rounded-full w-8 h-8 flex items-center justify-center'>
                    <BiChevronRight className='w-6 h-6 text-white' />
                </span>
            </Link>
            </div>
            <Link href="blog1">abc </Link>
            <Link href="blog2"> abc</Link>
        </div>
    </section>
  )
}

export default RecentBlog