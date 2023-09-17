import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiChevronLeft} from 'react-icons/bi';
import {BiChevronRight} from 'react-icons/bi';
import ContactBlog from '../contactBlog/page'

const blogContent = {
    img: {
        img1: '/images/hero_sec.svg',
        img2: '/images/img2.svg',
        img3: '/images/img3.svg',
        img4: '/images/img4.svg',
        img5: '/images/img5.svg',  
        img6: '/images/img13.png',
        img7: '/images/image-14.png',
        img8: '/images/image-15.png',
        img9: '/images/image-16.png',
    }
}

const Blog1 = () => {
  return (
    <section id='blog1' className='bg-bgcolor py-10 overflow-x-hidden'>
        <div className='container mx-auto px-4 border-2 pb-20 pt-10 '>
            <div className=''>
              <h2 className='text-heading lg:text-3xl font-semibold sm:ml-10 sm:mr-10'>Digital Marketing In Haldwani</h2>
              <p className='pt-5 text-lg sm:ml-10 sm:mr-10'> Leave a Comment / By mail.preettech / October 13, 2022</p>

             
              <div className="max-w-xl  mx-auto text-center mb-20 pt-20">
                <div className="flex space-x-2 items-stretch">
                    <div className="max-w-xl">
                        {blogContent.img.img1 && (
                            <Image src={blogContent.img.img1} width={697} height={606} alt="joefreycodes.com"
                            className="object-cover h-full w-full rounded-md" data-aos="flip-down" 
                            data-aos-delay="450"/>
                        )}
                    </div>
                    <div className="w-9/12 self-end space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                            {blogContent.img.img2 && (
                                <div> 
                                    <Image src={blogContent.img.img2} width={637} height={637} alt="joefreycodes.com"
                                    className="object-cover h-full w-full rounded-2xl" data-aos="zoom-in"
                                    data-aos-delay="200"/>
                                </div>
                            )}
                            <div className="bg-blueLight rounded-sm rounded-tr-[400px]"></div>
                        </div>
                        {blogContent.img.img4 && (
                            <div> 
                            <Image src={blogContent.img.img4} width={374} height={392} alt="joefreycodes.com"
                            className="object-cover h-full w-full rounded-2xl" data-aos="fade-up"
                            data-aos-delay="250" />
                        </div>
                        )}
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                        {blogContent.img.img5 && (
                        <div> 
                            <Image src={blogContent.img.img5} width={694} height={394} alt=""
                            className="object-cover h-full w-full rounded-2xl" 
                            />
                        </div>
                        )}
                        <div className="bg-greenLight rounded-2xl rounded-br-[200px]"></div>
                    </div>
                </div>   
            </div>

         <div className='pl-10 pr-10 sm:pl-10 sm:pr-10'>
            <p className='text-body leading-relaxed text-lg lg:text-2xl font-serif'>Preet Tech  is a institute where students may learn about cutting-edge internet marketing strategies and launch a career in the sector. 
            <Link href="/" className='underline underline-offset-4 transition-all ease-in-out' > Preet Tech </Link> provides our students with lifetime assistance in addition to live online marketing training sessions. This institute allows students to participate in a live project, providing them with real-world experience.
Preet Tech providespracticle knowledge, as well as certification from Google and Hubspot. This is Haldwani  best digital marketing course, and it offers both online and classroom teaching.</p>
         
          <p className='text-body font-semibold text-lg lg:text-2xl pt-10'>Courses Provided by Preet Tech</p>
          <p className='text-body text-lg lg:text-2xl pt-10'>Preet Tech offered courses:</p>
          <ol className='pt-10 list-decimal pl-10'>
            <li >Digital Marketing</li>
            <Link href="/" className='underline text-lg lg:text-2xl'>
            <li className='pt-2'>Website Designing</li></Link>
          </ol>
          <p className='pt-10 text-body text-lg lg:text-2xl font-serif'>Why Preet Tech is the best Digital Marketing Academy In India</p>
          <div className='pt-10 lg:w-9/12 w-90 pl-10 pr-10 sm:pl-10 sm:pr-10'>
            {blogContent.img.img6 && (
                <Image src={blogContent.img.img6} height={344} width={344} alt=''
                 className='h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                 hover:border-4 hover:border-solid hover:border-primary 
                  hover:border-dashed ' />
            )}
          </div>

          <ul className='list-disc pl-10 pt-10 text-slate-500 '>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Training that is 99 percent practical</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Real live project in live class</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Google certified Training</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>One of the best digital marketing institutes in Haldwani is recommended.</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Latest syllabus</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Job interview preparation</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>study material provide to students videos+pdf file</li>
          </ul>

          <p className='pt-10 text-body text-lg lg:text-2xl font-bold font-serif'>SCOPE OF DIGITAL MARKETING</p>
          <p className='pt-5 text-body text-lg lg:text-2xl font-serif'>Demand Of Digital Marketing In India</p>
          <div className='pt-10  lg:w-8/12 '>
            {blogContent.img.img7 && (
                <Image src={blogContent.img.img7} height={544} width={544} alt=''
                 className='h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer
                   hover:border-4 hover:border-solid hover:border-primary 
                  hover:border-dashed' />
            )}
          </div>
          <p className='pt-10 text-body text-lg lg:text-2xl leading-relaxed font-serif'>Over 20 lakh Digital Marketing experts would be required. Most businesses used to promote their products by holding, newspapers, radio, television, and other types of media. However, all organisations are expanding and creating digital marketing work for us right now. Preet Tech  The best digital marketing school in haldwani  that includes hands-on training and live sessions.</p>
        <p className='pt-10 text-body leading-relaxed text-lg lg:text-2xl  font-serif'>With digital marketing, any firm can grow swiftly and serve customers all over the world. This was not possible with traditional marketing. According to Google, businesses are spending a lot of money on Facebook to reach their goals.</p>
<p className='pt-10 text-body text-lg lg:text-2xl leading-relaxed font-serif font-bold'>DIGITAL MARKETING JOBS</p>
<div className='pt-10 lg:w-8/12   '>
            {blogContent.img.img8 && (
                <Image src={blogContent.img.img8} height={544} width={544} alt=''
                 className='h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer
                   hover:border-4 hover:border-solid hover:border-primary 
                  hover:border-dashed ' />
            )}
          </div>
          <p className='pt-10 text-body text-lg lg:text-2xl leading-relaxed font-serif'>Finding work is the simplest and most successful way to start a career in Digital Marketing because there are so many specialization in Digital Marketing, you will have several possibilities for starting your Digital Marketing Career.</p>
         <p className='pt-10 text-body text-lg lg:text-2xl leading-relaxed font-bold'>Higher Levels of Digital Marketing Job Titles</p>
         <ul className='list-disc pt-10 pl-10 text-slate-500'>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Paid Advertising Manager</li>
            <li  className='text-lg lg:text-2xl pt-2 hover:text-black'>Digital Marketing Strategist</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Digital Marketing Director</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>SEO & SEM Specialists.</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>UX Designer.</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Email Marketing Specialist.</li>
            <li className='text-lg lg:text-2xl pt-2 hover:text-black'>Digital Marketing Managers & Directors</li>
         </ul>
         <p className=' pt-10 text-body text-lg lg:text-2xl leading-relaxed font-serif font-bold'>SCOPE OF DIGITAL MARKETING</p>
         <div className='pt-10  lg:w-8/12  '>
            {blogContent.img.img9 && (
                <Image src={blogContent.img.img9} height={544} width={544} alt=''
                 className='h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer
                   hover:border-4 hover:border-solid hover:border-primary 
                  hover:border-dashed ' />
            )}
          </div>

          <div>
            <ol className='list-decimal pt-10 pl-10 text-slate-500 text-lg lg:text-2xl leading-relaxed  font-serif'>
                <li className='pt-10 hover:underline text-lg hover:text-black font-semibold'>START A PERSONAL BLOG</li>
                <p className='pt-2 text-lg lg:text-2xl text-body leading-relaxed'>You can start your own website by mastering digital marketingMany digital marketing specialists have made blogging their full-time job. Blogging becomes a full-time job for many digital marketing professionals. For many digital marketing professionals, blogging became a full-time job have made blogging their full-time profession. Through dedication and hard effort, many professionals have attained success as exceptional bloggers in their particular industries Advertisement and affiliate marketing are two ways for bloggers to make money.</p>
                
                <li className='pt-10 hover:underline text-lg hover:text-black font-semibold'>BEGIN FREELANCING</li>
                <p className='pt-2 text-lg lg:text-2xl text-body leading-relaxed'>Freelancing is all about providing your services to clients as an individual. From the convenience of your own home or office, you may build a global clientele. Many online freelancing platforms, such as Fiverr and Freelancer, are great places to start a freelance career.</p>
                
                <li className='pt-10 hover:underline text-lg hover:text-black font-semibold'>OPEN YOUR OWN AGENCY</li>
                <p className='pt-2 text-lg lg:text-2xl text-body leading-relaxed'>If you have experience operating a firm and resources or relationships, you can surely establish your own full-time digital marketing agency. You can design marketing plans for clients and implement them through your firm’s use of Digital Marketing.</p>
                
                <li className='pt-10 hover:underline text-lg hover:text-black font-semibold'>SCOPE OF TRAINER</li>
                <p className='pt-2 text-lg lg:text-2xl text-body leading-relaxed'>If you are expertise in digital marketing then you can also become trainer of digital marketing. If you are enthusiastic about teaching and have past teaching experience, and you enjoy sharing your knowledge,your knowledge with others, you can build a great career as a Digital Marketing Trainer/Online Coach. To become a quality trainer you must develop an in-depth practical understanding of each topic and work on real-time projects before delivering training.</p>

            </ol>
          </div>
         </div>
            </div>
        </div>


        <div class="flex pb-10 pt-20 ml-20 mr-20">
  <div className='lg:w-6/12'>
  <a href="/" class="flex items-center justify-center px-3 h-8 text-md font-medium text-gray-500 bg-white  rounded-lg hover:text-primary  hover:bg-white">
  <BiChevronLeft /> Previous
  </a> </div>
  <div className='lg:w-8/12'>
  <a href="blog2" class="flex items-center justify-center px-3 h-8 ml-3 text-md font-medium text-gray-500 bg-white rounded-lg  hover:text-primary  hover:bg-white">
   Next <BiChevronRight /> 
  </a>
  </div>
</div>

        <ContactBlog />
    </section>
  )
}

export default Blog1