'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import {HiLocationMarker, HiOutlineMail} from 'react-icons/hi'
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart  } from 'react-icons/hi2'


const footContent = {
  about: {
    logo: "/images/plogo.png",
    description : "Crafting Tomorrow’s IT Solutions, Today. Your Partner in Tech Excellence.",
    cta: {
      href: "#_",
      label: "Learn more"
    },
  },
  footerLinks: [
    {
      heading: "Services",
      links: [
        {
          href: "#_",
          label: "How it Wokrs"
        },
        {
          href: "#_",
          label: "Web development"
        },
        {
          href: "#_",
          label: "Work portfolio"
        },
        {
          href: "#_",
          label: "SEO & Backlinks"
        },
        {
          href: "#_",
          label: "SMM production"
        },
        {
          href: "#_",
          label: "collaboration"
        },
      ]
    },
    {
      heading: "About",
      links: [
        {
          href: "#_",
          label: "Our mission",
        },
        {
          href: "#_",
          label: "Our story",
        },
        {
          href: "#_",
          label: "Team members",
        },
        {
          href: "#_",
          label: "Plan & Pricing",
        },
        {
          href: "#_",
          label: "Live chat",
        },
        {
          href: "#_",
          label: "Career",
        }
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description: "Your Gateway To Exceptional IT Services. Reach Us At :-",
    address: {
      email: "info@prettech.com",
      street: "Near Krishna Hospital Haldwani, Nainital 263139",
      phone: "+91 9756667397",
      }
  },
  copyright: {
    labelOne: "Copyright © 2023",
    labelTwo: " All Rights Reserved."
  }
}

const Footer = () => {
  return (
   <footer role='contentinfo' className='py-10 mb-0 bg:bgcolor'>
    <div className='container px-4 mx-auto'>
      <div className='block lg:flex gap-20 mb-0 pb-5'>
        <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
          <Link href="/" className='mb-4 inline-block'>
            <Image  src={footContent.about.logo} width={157} height={30} alt='joefreycodes.com'/>
          </Link>
          <p className='leading-relaxed mb-7'>
            {footContent.about.description}
          </p>
          <p>
            <Link href={footContent.about.cta.href} className='flex space-2 outline-none items-center
            font-semibold text-primary group'>
              <span>{footContent.about.cta.label}</span>
              <span className='w-6 h-6 rounded-full bg-primary text-white inline-flex items-center
              justify-center duration-300 transition-all ease-in-out group-hover:bg-seconadry'>
                <BiChevronRight className='text-lg' />
              </span>
            </Link>
          </p>
        </div>
         <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
          <div className='grid grid-cols-2 gap-10'>
            {footContent.footerLinks.map((footerLinks, idx) => (
              <div key={idx}>
                <h3 className='font-semibold text-heading mb-5'>
                  {footerLinks.heading}
                </h3>
                <ul className='p-0 m-0'>
                  {footerLinks.links.map((link, idx) => (
                    <li className='mb-3' key={idx} >
                      <Link href={link.href} className='group flex items-center
                      duration-300 transition-all ease-in-out hover:text-primary'>
                        <span>{link.label}</span>
                        <span className='left-2 realtive duration-300 transition-all
                        ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                          <BiChevronRight className='text-xl'/>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
         </div>
         <div className='w-4/12'>
          <h3 className='font-semibold text-heading mb-5'>
            {footContent.contact.heading}
          </h3>
          <p className='leading-relaxed mb-7 font-semibold8io98'>
            {footContent.contact.description}
          </p>
          <ul>
            <li className='flex items-start space-x-3 mb-5'>
              <HiOutlineMail className='text-xl text-primary' />
              <span>{footContent.contact.address.email}</span>
            </li>
            <li className='flex items-start space-x-3 mb-5'>
              <HiLocationMarker className='text-xl text-primary' />
              <span>{footContent.contact.address.street}</span>
            </li>
            <li className='flex items-start space-x-3 mb-5'>
              <HiPhone className='text-xl text-primary' />
              <span>{footContent.contact.address.phone}</span>
            </li>
          </ul>
         </div>
      </div>
      <div className='text-center pt-5 border-t border-gray-200 pb-0'>
        <p>{footContent.copyright.labelOne}{" "}
        <HiMiniHeart className='text-red-600 inline-block' />
        {footContent.copyright.labelTwo}</p>
      </div>
    </div>
   </footer>
  )
}

export default Footer