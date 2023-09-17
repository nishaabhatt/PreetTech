import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactBlog from '../contactBlog/page'
import {BiChevronLeft} from 'react-icons/bi';
import {BiChevronRight} from 'react-icons/bi';

const blogContent = {
   img: {
    img1: "/images/image-17.png",
    img2: "/images/image-18.png",
    img3: "/images/image-19.png",
   }
}

const Blog2 = () => {
  return (
    <section id='blog2' className='bg-bgcolor py-15'>
        <div className='container mx-auto px-4 border-2 pb-20 pt-10 '>
          <div className=''>
            <h2 className='text-heading text-lg lg:text-3xl font-semibold pl-10 pr-10'>On Page And Off Page SEO</h2>
            <p className='pt-5 text-lg  pl-10 pr-10'> Leave a Comment / By mail.preettech / October 9, 2022</p>
          
             <div className='pl-10 pr-10 sm:pl-10 sm:pr-10'>
              <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>What Is SEO</h2>
                <div className='pt-10'>
                  {blogContent.img.img1 && (
                    <Image src={blogContent.img.img1 } height={344} width={344} alt='' className='object-cover
                     w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
                    hover:border-4 hover:border-solid hover:border-primary 
                     hover:border-dashed ' />
                  )}
                </div>
               <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>
                SEO is a Technique which is used by <Link href='/' className='underline text-black'>Digital Marketer</Link> to rank their website on a given keyword.</p> 
               <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>Search Engine Optimization is the process of improving the quality of websites and web pages. As a result, search bots can quickly crawl and index web pages, and site rank will be high.</p>
             </div>
          
           <div className='pl-10 pr-10 sm:pl-10 sm:pr-10'>
            <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>NEED OF SEO</h2>
           <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>It is required for crawling the page; without these tools, a website cannot be ranked, and your web pages will not be found in search engines or at the bottom of SERPs.</p>
           <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>GOOGLE ALGORITHMS</h2>
           <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>Google Algorithms- Google Panda, Penguins, Humming Bird, Google Mobile Phone Algorithm, Rank Brain, Google Pigeon, , BERT, SMITH, MUM and many more.</p>
           <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>SEO TECHNIQUES</h2>
           <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>There are 3 Types Of SEO Techniques:</p>
             <div>
              <ol className='list-decimal pl-10 pt-10 '>
                <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>WHITE HAT SEO</li>
                <p className='text-body leading-relaxed font-serif pt-5 text-lg lg:text-2xl'>White Hat SEO follows all the rule and regulations of Google Algorithm. White Hat SEO depend on hard work and the best quality of work. The white Hat SEO basically takes 3 to 6 Months to Rank.</p>
                <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>BLACK HAT SEO</li>
                <p className='text-body leading-relaxed font-serif pt-5 text-lg lg:text-2xl'>Black Hat SEO does not follow rules and regulations of Google Algorithm. Black Hat SEO follow illegal and wrong way of Optimization. Black Hat SEO is complete very fast. But it is not static.</p>
                <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>GRAY HAT SEO</li>
                <p className='text-body leading-relaxed font-serif pt-5 text-lg lg:text-2xl'>Gray Hat SEO sometimes follow rules and regulations of Google Algorithm and sometimes it break the rules of Google Algorithm. Gray Hat take less time rather than White Hat SEO.</p>
              </ol>
             </div>
           </div>

           <div className='pl-10 pr-10 sm:pl-10 sm:pr-10'>
            <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>ON- PAGE OPTIMIZATION</h2>
            <div className='pt-10'>
            {blogContent.img.img2 && (
              <Image src={blogContent.img.img2} height={344} width={344} alt='' className='object-cover
              w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
             hover:border-4 hover:border-solid hover:border-primary 
              hover:border-dashed '/>
            )}
            </div>
            <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>ON – Page SEO refers to SEO factors and techniques these are under your control. During the On – page SEO following things should be remember.</p>
           <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>NICHE</h2>
           <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>First Of all you should choose your Niche and according you can create a content. Without Niche you cannot write good and centralized blog.</p>
           <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>Keyword</h2>
           <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>Keyword are the word that people type into Search engine to find they are looking for. Keyword play a very essential role in On Page SEO. Keyword Planner is the top best tool for keyword planner.</p>
           <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>Heading</h2>
           <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>Heading Page is essentially for on- page SEO. Heading are 3 types from H1 to H6. Heading have their fixed place. We cannot changed them.</p>
           <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>Title</h2>
            <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>Title Tells the Search Engine Crawler what your site is all about. Title contains 70 characters according to the Google algorithm.</p>
            <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>Description</h2>
            <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>Description play a very important role in Rich snippets. and it tells Google bots that about your article. Description contains 170 character according to the Google algorithm.</p>
           </div>


<div className='pl-10 pr-10 sm:pl-10 sm:pr-10'>
  <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '>OFF PAGE OPTIMIZATION</h2>
  <div className='pt-10'>
    {blogContent.img.img3 && (
      <Image src={blogContent.img.img3} height={344} width={344} alt=''
       className='object-cover
       w-full h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer
      hover:border-4 hover:border-solid hover:border-primary 
       hover:border-dashed ' />
    )}
  </div>
  <p className='text-body leading-relaxed font-serif pt-10 text-lg lg:text-2xl'>The off-page is dependent on connecting with other websites via links. Off-page techniques include creating backlinks, inbound links, outbound links, bookmarking sites, commenting, reviewing, and creating profiles on other websites.</p>
 <h2 className='text-heading text-slate-400 lg:text-2xl text-lg font-bold pt-10 '></h2>
 <ol  className='list-decimal pl-10 pt-10 '>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Profile Backlink</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Inbound Link</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Outbound Link</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>External Link</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Social Bookmarking</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Directory Submission</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Blog Posting</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Blog Commenting</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Guest Posting</li>
  <li className='pt-2 text-lg lg:text-2xl text-gray-400 font-serif pt-2'>Question & Answer site</li>
 </ol>
</div>
 </div>
  </div>


  <div class="flex pb-10 pt-20 ml-20 mr-20">
  <div className='lg:w-6/12'>
  <a href="blog1" class="flex items-center justify-center px-3 h-8 text-md font-medium text-gray-500 bg-white  rounded-lg hover:text-primary  hover:bg-white">
  <BiChevronLeft /> Previous
  </a> </div>
  <div className='lg:w-8/12'>
  <a href="blog3" class="flex items-center justify-center px-3 h-8 ml-3 text-md font-medium text-gray-500 bg-white rounded-lg  hover:text-primary  hover:bg-white">
   Next <BiChevronRight /> 
  </a>
  </div>
</div>

    <ContactBlog />
    </section>
  )
}

export default Blog2