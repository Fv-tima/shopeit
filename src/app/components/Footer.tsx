"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from './Nav'

export default function Footer() {
  return (
  <div className='bg-[#251F73] p-4 text-white'>
    <div className='p-[40px] flex flex-col sm:flex-row gap-y-8 justify-evenly w-full h-full'>
      <div className="flex flex-col space-y-2">
        <h1 className='font-700 text-[25px] mb-2'>Shopit</h1>
        <div className='flex items-center space-x-2'>
          <Image src="/location.svg" alt='social' width={24} height={24} />
          <p className='font-[500] text-[16px]'>165 Main Street Sunnyvale</p>
        </div>
        <div className='flex items-center space-x-2'>
          <Image src="/sms.svg" alt='social' width={24} height={24} />
          <p className='font-[500] text-[16px]'>1Info@sunnyvale.com</p>
        </div>
        <div className='flex items-center space-x-2'>
          <Image src="/call.svg" alt='social' width={24} height={24} />
          <p className='font-[500] text-[16px]'>+234 9075643219</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className='font-500 text-[20px] underline mb-2'>Links</h1>
        {navItems.map((item) => (
          <ul key={item.id} className='flex flex-col'>
            <Link href={item.link}><li className="text-[16px] font-[500]" >{item.item}</li></Link>
          </ul>
        ))}
      </div>
      <div className="flex flex-col space-y-3">
      <h1 className='font-500 text-[20px] underline mb-2'>Follow us on</h1>
      <div className="flex items-center space-x-2">
      <Image src="/fb.svg" alt='social' width={24} height={24} />
      <Image src="/tw.png" alt='social' width={24} height={24} />
      <Image src="/in.svg" alt='social' width={24} height={24} />
      </div>
      </div>
    </div>
    <div className="flex items-center justify-end space-x-2">
    <Image src="/global.png" alt='social' width={24} height={24} />
      <p className='font-[500] text-[16px]'>Nigeria</p>
    </div>
    </div>
  )
}
