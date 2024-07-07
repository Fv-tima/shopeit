"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useShoppingCart } from "../context/ShoppingCartContext"
import { products } from '@/product'
import Thanks from '../components/Thanks'

export default function page() {
  const [openModal, setOpenModal] = useState(false)

  const open = () => {
    setOpenModal((prev) => !prev);
  }

  const [tick, setTick] = useState(false)

  const click = () => {
    setTick((prev) => !prev);
  }

  const { cartItems, clearCart } = useShoppingCart()
  const total = cartItems.reduce((total, cartItem) => {
    const item = products.find(i => i.id === cartItem.id);
    const price = item?.price ?? 0; // Use nullish coalescing for default price
    return total + (price * cartItem.quantity);
  }, 0)
  return (
    <div className='p-10 relative'>
      <div className=" text-white p-[40px] text-center bg-[#251f73]">
        <h1 className="font-[700] text-[60px]">Checkout</h1>
      </div>
      <h1 className="font-500 text-[31.25px] p-4">Product Details</h1>
      <form action="" className="flex md:flex-row flex-col justify-evenly">
        <div className="flex flex-col my-6 gap-y-6">
          <div className='grid gap-6'>
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
          </div>
          <h1 className="font-[500] text-[31.25px] mt-4">Payment Method</h1>
          <p className="font-[500] text-[12.8px] my-2">Select a Payment Method</p>
          <div className="flex flex-col gap-y-4 justify-center">
            {method.map((item) => (
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  <Image
                    src={item.image}
                    width={24}
                    height={24}
                    alt="card" />
                  <h1 className='font-[400] text-[16px] text-[#251f73]'>{item.title}</h1>
                </div>
                <div onClick={click}>
                  {tick ? <Image src="/tick.svg" alt='fav' width={24} height={24} /> : <Image src="/Emick.svg" alt='fav' width={24} height={24} />}
                </div>
              </div>
            ))}
          </div>
          <div className='grid gap-6 mt-5'>
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
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-full md:w-[500px]">
          <h1 className="bg-[#C3BEF6] p-2 font-[500] rounded-md text-[20px] md:flex hidden">Total for Product</h1>
          <div className="flex  justify-between w-full">
            <h1 className="text-gray-400 font-[400] text-[16px]">Sub Total</h1>
            <h1 className="font-[400] text-[16px]">${total}</h1>
          </div>
          <div className="flex  justify-between w-full">
            <h1 className="text-gray-400 font-[400] text-[16px]">Delivery</h1>
            <h1 className="font-[400] text-[16px]">${455}</h1>
          </div>
          <div className="flex  justify-between w-full">
            <h1 className="text-gray-400 font-[400] text-[16px]">Total</h1>
            <h1 className="font-[400] text-[16px]">${total + 455}</h1>
          </div>
          <button onClick={open} className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-2 w-full rounded-md hover:border">Checkout</button>
          <div className="text-black text-[16px] font-medium hover:text-white bg-transparent hover:bg-[#251F73] text-center p-2 w-full rounded-md border cursor-pointer" onClick={clearCart}>Cancel</div>
        </div>
      </form>
      {openModal &&
        <div className="w-full flex justify-center h-full items-center mx-auto">
          <Thanks setOpenModal={setOpenModal} />
        </div>}
    </div>
  )
}

const method = [
  {
    id: 1,
    title: "Debit/Credit Card",
    image: "/card.png"
  },
  {
    id: 2,
    title: "Internet Banking",
    image: "/vec.png"
  },
  {
    id: 3,
    title: "Bank",
    image: "/vec.png"
  },
  {
    id: 4,
    title: "USSD",
    image: "/phone.png"
  },
]