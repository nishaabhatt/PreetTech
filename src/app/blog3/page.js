import React from 'react'
import ContactBlog from '../contactBlog/page'
import Image from 'next/image'
import Link from 'next/link'

const blogContent = {
    img: {
        img1: "/images/image-21.png",
        img2: "/images/image-13.png",
        img3: "/images/image-22.png",
        img4: "/images/image-23.png",
        img5: "/images/image-24.png",
        img6: "/images/image-25.png",
        img7: "/images/image-26.png",
        img8: "/images/image-27.png",
    }
}

const Blog3 = () => {
  return (
    <section id='blog3' className='bg-bgcolor py-15'>
        <div className='container mx-auto px-4 border-2 pb-20 pt-10 '>
            <div className=''>
                <h2 className='text-heading text-lg lg:text-3xl font-semibold pl-10 pr-10'>The Best Ways To Earn Money Using Digital Marketing</h2>
                <p className='pt-5 text-lg  pl-10 pr-10'> Leave a Comment / By mail.preettech / October 9, 2022</p>
             
             <div className='pl-10 pr-10 sm:pl-10 sm:pr-10'>
                <div className='pt-10'>
                  {blogContent.img.img1 && (
                    <Image src={blogContent.img.img1 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
                <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-xl'>Those days are gone when earning money was only done through a traditional method. Now days there are various method to earn money through Digital Platform.</p>
                <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-xl'>Now, There are different ways available to earn money at this time and age. The latest buzz to earn money online is through digital marketing. Digital marketing is a great way to earn money without going out. You can earn money easily while sitting at home.</p>
            </div>

            <div className='pl-10 pr-10 sm:pl-10 sm:pr-10'> 
             <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>What Is Digital Marketing</h2>
               <div className='pt-10'>
                  {blogContent.img.img2 && (
                    <Image src={blogContent.img.img2 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
              <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-xl'>Digital Marketing is also known as Online Marketing. Digital Marketing is basically promotion of Brand to connect with the top best potential customer using Digitally.</p>
              <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-xl'>Digital technologies rule the world in today’s information age. Online marketing technologies are used by digital marketing to sell goods and services. It uses the internet to reach out to potential customers and provides a range of services including PPC, content marketing, social media, SEO, and more.</p>
            </div>

            <div className='pl-10 pr-10 sm:pl-10 sm:pr-10'>
            <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>Now, let’s look at The Best Ways To Earn Money Using Digital Marketing:</h2>
             <ol  className='list-decimal pl-10 pt-10 '>
                <li  className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Content Writing</li>
                <div className='pt-10'>
                  {blogContent.img.img1 && (
                    <Image src={blogContent.img.img1 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
                    <li  className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Website Designing</li>
                    <div className='pt-10'>
                  {blogContent.img.img3 && (
                    <Image src={blogContent.img.img3 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
                    <li  className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>SEO</li>
                    <div className='pt-10'>
                  {blogContent.img.img5 && (
                    <Image src={blogContent.img.img5 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
                    
                    <li  className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Blogger</li>
                    <div className='pt-10'>
                  {blogContent.img.img6 && (
                    <Image src={blogContent.img.img6 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
                    
                    <li  className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>E- Commerce Website</li>
                    <div className='pt-10'>
                  {blogContent.img.img7 && (
                    <Image src={blogContent.img.img7 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
                    
                    <li  className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Scope of Trainer</li>
                    <div className='pt-10'>
                  {blogContent.img.img8 && (
                    <Image src={blogContent.img.img8 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
                
                </ol>
            </div>

            </div>
        </div>
        <ContactBlog />
    </section>
  )
}

export default Blog3