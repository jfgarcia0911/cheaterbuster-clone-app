import React from 'react'
import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import TiktokIcon from '../icons/TiktokIcon'
import CustomImage from '../ui/CustomImage'

export default function Footer() {
  return (
    <div className='w-full h-145 bg-black rounded-t-[3rem] flex  justify-center'>
      <div className='w-100 gap-10 mt-20 mb-15 flex flex-col items-center justify-center'>
        <div className='flex items-center text-6xl font-extrabold text-brand-red'>
          <CustomImage link='/cb-footer-logo.png' dimensions='h-10 w-60'/>
        </div>
        <div className='flex gap-8 text-white'>
          <FacebookIcon className=' h-8 w-8'/>
          <InstagramIcon className=' h-8 w-8'/>
          <YoutubeIcon className=' h-8 w-8'/>
          <TiktokIcon className=' h-8 w-8'/>
        </div >
        <div className='flex text-white gap-10'>
          <div className=' flex flex-col items-center gap-5 text-xl'>
            <h1 className='text-brand-gray'>MAIN</h1>
            <p>Home</p>
            <p>FAQ</p>
            <p>About Us</p>
          </div>
          <div className='flex flex-col  items-center gap-5 text-xl'>
            <h1 className='text-brand-gray'>RESOURCES</h1>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className='flex gap-2 text-white text-sm'>
          Privacy Policy <div className='bg-brand-red h-2 w-2 mt-1 rounded-full'></div> Terms of Service
        </div>
        <div>2026 CheaterBuster. All rights reserved.</div>
      </div>
    </div>
  )
}
