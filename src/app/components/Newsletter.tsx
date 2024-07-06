import React from 'react'

export default function Newsletter() {
  return (
    <div className='sub text-white py-[220px] px-[40px]'>
    <div className="flex flex-col justify-center md:space-y-6 md:items-start items-center w-full h-full">
      <h1 className='font-[700] text-[48.83px]'>Subscibe Our Newsletter</h1>
      <p className='font-[400] text-[20px] max-w-[457px]'>Sign up for our newsletter to receive the latest product market updates, and fashion  tips straight to your inbox.</p>
      <div className='flex mt-4'>
        <input type="text" placeholder='Enter Email' className='rounded-l-lg p-2 w-full'/>
        <button className="text-white text-[16px] font-medium p-2 rounded-r-lg bg-[#251f73] flex items-center space-x-2"> Subscribe</button>
      </div>
    </div>
  </div>
)
}
