import React from 'react'

export default function Newsletter() {
  return (
    <div className='sub text-white py-[220px] px-[40px]'>
    <div className="flex flex-col  md:justify-center md:space-y-6 space-y-4 md:items-start items-center w-full h-full md:text-start  text-center">
      <h1 className='font-[700] md:text-[48.83px] text-[42px]'>Subscibe Our Newsletter</h1>
      <p className='font-[400] text-[20px] max-w-[457px]'>Sign up for our newsletter to receive the latest product market updates, and fashion  tips straight to your inbox.</p>
      <div className='flex md:flex-row flex-col items-center space-y-4 md:space-y-0 mt-4'>
        <input type="text" placeholder='Enter Email' className='md:rounded-l-lg rounded-lg p-3 w-full md:rounded-r-none'/>
        <button className="text-white text-[16px] font-medium p-3 md:rounded-r-lg bg-[#251f73] flex justify-center items-center space-x-2 rounded-lg md:rounded-l-none w-full md:w-auto"> Subscribe</button>
      </div>
    </div>
  </div>
)
}
