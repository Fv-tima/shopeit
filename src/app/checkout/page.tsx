"use client"
import React from 'react'
import Total from '../components/Total'
import Image from 'next/image'
import { useState } from 'react'

export default function page() {
  const [tick, setTick] = useState(false)

  const click = () => {
    setTick(!tick)
  }
  return (
    <div className='p-10'>
      <div className=" text-white p-[40px] text-center bg-[#251f73]">
        <h1 className="font-[700] text-[60px]">Checkout</h1>
      </div>
      <h1 className="font-500 text-[31.25px] p-4">Product Details</h1>
      <div className="flex md:flex-row flex-col justify-evenly">
        <div className="flex flex-col my-6 gap-y-6">
          <form action="" className='grid gap-6'>
            <div className='flex gap-6 flex-col md:flex-ow'>
              <div className="flex flex-col ">
                <label htmlFor="first">First Name</label>
                <input type="text" name="" id="first" required placeholder="Card Number " className='w-full p-4 bg-transparent border rounded-lg border-gray-400' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="last">Last Name</label>
                <input type="text" name="" id="last" required placeholder="Card Number " className='w-full p-4 bg-transparent border rounded-lg border-gray-400' />
              </div>
            </div>
            <div className="flex gap-6 flex-col md:flex-ow">
              <div className='flex flex-col'>
                <label htmlFor="number">Phone Number</label>
                <input type="text" name="" id="number" required placeholder="Card Number " className='w-full p-4 bg-transparent border rounded-lg border-gray-400' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email">Email Address</label>
                <input type="text" name="" id="email" required placeholder="Card Number " className='w-full p-4 bg-transparent border rounded-lg border-gray-400' />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="address">Address</label>
              <input type="text" name="" id="address" required placeholder="Card Number " className='w-full p-4 bg-transparent border rounded-lg border-gray-400' />
            </div>
            <div className="flex gap-6 flex-col md:flex-ow">
              <div className='flex flex-col'>
                <label htmlFor="country">Country</label>
                <input type="text" name="" id="country" required placeholder="Card Number " className='w-full p-4 bg-transparent border rounded-lg border-gray-400' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="city">City</label>
                <input type="text" name="" id="city" required placeholder="Card Number " className='w-full p-4 bg-transparent border rounded-lg border-gray-400' />
              </div>
            </div>
          </form>
          <h1 className="font-[500] text-[31.25px] mt-4">Payment Method</h1>
          <p className="font-[500] text-[12.8px] my-2">Select a Payment Method</p>
          <div className="flex flex-col gap-y-4 justify-center">
            <div className="flex justify-between">
              <div className="flex space-x-1">
                <Image
                  src="/card.png"
                  width={24}
                  height={24}
                  alt="card" />
                <h1 className='font-[400] text-[16px] text-[#251f73]'>Debit/Credit Card</h1>
              </div>
              <button onClick={click}>
                {tick ? <Image src="/tick.svg" alt='fav' width={24} height={24} /> : <Image src="/Emick.svg" alt='fav' width={24} height={24} />}
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-1">
                <Image
                  src="/vec.png"
                  width={24}
                  height={24}
                  alt="card" />
                <h1 className='font-[400] text-[16px] '>Internet Banking</h1>
              </div>
              <button onClick={click}>
                {tick ? <Image src="/tick.svg" alt='fav' width={24} height={24} /> : <Image src="/Emick.svg" alt='fav' width={24} height={24} />}
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-1">
                <Image
                  src="/vec.png"
                  width={24}
                  height={24}
                  alt="card" />
                <h1 className='font-[400] text-[16px] text-[#251f73]'>Bank</h1>
              </div>
              <button onClick={click}>
                {tick ? <Image src="/tick.svg" alt='fav' width={24} height={24} /> : <Image src="/Emick.svg" alt='fav' width={24} height={24} />}
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-1">
                <Image
                  src="/phone.png"
                  width={24}
                  height={24}
                  alt="card" />
                <h1 className='font-[400] text-[16px] text-[#251f73]'>USSD</h1>
              </div>
              <button onClick={click}>
                {tick ? <Image src="/tick.svg" alt='fav' width={24} height={24} /> : <Image src="/Emick.svg" alt='fav' width={24} height={24} />}
              </button>
            </div>
          </div>
          <form action="" className='grid gap-6 mt-5'>
            <div className='flex gap-6 flex-col md:flex-ow'>
              <div className="flex flex-col relative">
                <label htmlFor="card">Card Number</label>
                <input type="text" name="" id="card" required placeholder="Card Number " className='w-full pl-6 p-4 bg-transparent border rounded-lg border-gray-400' />
                <Image
                  src="/card.png"
                  width={24}
                  height={24}
                  alt="card" className='absolute top-10' />
              </div>
              <div className="flex flex-col relative">
                <label htmlFor="cvv">CVV</label>
                <input type="text" name="" id="cvv" required placeholder="Card Number " className='w-full p-4 pl-6 bg-transparent border rounded-lg border-gray-400' />
                <Image
                  src="/lock.png"
                  width={24}
                  height={24}
                  alt="card" className='absolute top-10' />
              </div>
            </div>
            <div className='flex gap-6 flex-col md:flex-row'>
              <div className="flex flex-col relative">
                <label htmlFor="card">Expire Name</label>
                <input type="text" name="" id="card" required placeholder="Card Number " className='w-full p-4 pl-6 bg-transparent border rounded-lg border-gray-400' />
                <Image
                  src="/calendar.png"
                  width={24}
                  height={24}
                  alt="card" className='absolute top-10' />
              </div>
              <div className="flex flex-col relative">
                <label htmlFor="cvv">Card Holder Name</label>
                <input type="text" name="" id="cvv" required placeholder="Card Number " className='w-full p-4 pl-6 
                bg-transparent border rounded-lg border-gray-400' />
                <Image
                  src="/user.png"
                  width={24}
                  height={24}
                  alt="card" className='absolute top-10' />
              </div>
            </div>
          </form>
        </div>
        <Total />
      </div>
    </div>
  )
}