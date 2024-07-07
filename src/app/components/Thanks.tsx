import Image from 'next/image'
import React from 'react'
Image
export default function Thanks({setOpenModal}:any) {
  const back = () =>{
setOpenModal(false)
  }
  return (
    <div  onClick={back} className=' flex flex-col justify-between h-[500px] w-[300px] md:w-[400px] shadow-md fixed rounded-lg p-14 text-[#251F73] top-12  items-center bg-white'> 
    <Image
    src="/vec2.png"
    alt='check'
    width={163}
    height={163}/>
    <h1 className="font-600 text-[36px] italic">Thank you!</h1>
    <p className='font-[500] text-[16px] text-[#3d3e43] text-center'>Your payment is successful 
    Please check you E-mail for receipt.</p>
    <p className='font-[700] text-[16px]'>Tracking ID: #1234555</p>
    <button className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-2 w-full rounded-md hover:border">Track Order</button>
    </div>
  )
}
