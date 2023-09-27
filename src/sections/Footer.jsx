import React from 'react';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';
import { copyrightSign } from '../assets/icons';

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div>
          <a href='/'>
            <img
              src={footerLogo}
              alt="footer logo" // Added an alt attribute for accessibility
              width={150}
              height={46}
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Reward
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon, index) => ( // Added index
              <div key={index} className='flex justify-center items-center w-12 h-12 bg-white'>
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        {/* the next part */}
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* the end */}
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointe'>
            <img
              src={copyrightSign}
              alt='copy right sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
             <p>  Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
