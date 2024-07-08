"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useShoppingCart } from "../context/ShoppingCartContext"
import { products } from '@/product'
import Thanks from '../components/Thanks'

type KeyCheck = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  country: string;
  city: string;
  card: string;
  cvv: string;
  exp: string;
  holder: string;
};

type Check = {
  [K in keyof KeyCheck]: string;
};


export default function Page() {
  const [regData, setRegData] = useState<Check>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    city: "",
    card: "",
    cvv: "",
    exp: "",
    holder: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Data:', regData);
    setOpenModal(true)
    setRegData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      country: "",
      city: "",
      card: "",
      cvv: "",
      exp: "",
      holder: ""
    })
  }

  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    const newData: Check = { ...regData };
    newData[e.target.id as keyof Check] = e.target.value
    setRegData(newData);
    console.log(newData);
  }

  const [openModal, setOpenModal] = useState(false)


  const { cartItems, clearCart } = useShoppingCart()
  const total = cartItems.reduce((total, cartItem) => {
    const item = products.find(i => i.id === cartItem.id);
    const price = item?.price ?? 0; // Use nullish coalescing for default price
    return total + (price * cartItem.quantity);
  }, 0)
  return (
    <div>
      <div className=" text-white p-[40px] text-center bg-[#251f73]">
        <h1 className="font-[700] text-[60px]">Checkout</h1>
      </div>
      <div className={`p-10 relative bg-white ${openModal ? 'bg-[#5a1516]' : ""}`}>
        <h1 className="font-[500] text-[31.25px] p-4">Product Details</h1>
        <form action="" onSubmit={handleSubmit} className="flex lg:flex-row flex-col justify-evenly items-start">
          <div className="flex flex-col my-6 gap-y-6  ">
            <div className='grid gap-6 w-full'>
              <div className='flex gap-6 w-full flex-col md:flex-row'>
                <div className="flex flex-col relative">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="" id="firstName" required placeholder="Enter your First Name" className='lg:w-[350px] w-350px p-4 bg-transparent border rounded-lg border-[#251f73] ' onChange={(e) => handle(e)} value={regData.firstName}
                  />
                  <Image
                    src="/ast.svg"
                    width={8}
                    height={8}
                    alt="card" className='absolute top-2 right-2' />
                </div>
                <div className='flex flex-col relative'>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="" id="lastName" required placeholder="Enter your Last Name" className='lg:w-[350px] w-full md:w-350px p-4 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.lastName} />
                  <Image
                    src="/ast.svg"
                    width={8}
                    height={8}
                    alt="card" className='absolute top-2 right-2' />
                </div>
              </div>
              <div className="flex gap-6 flex-col md:flex-row">
                <div className='flex flex-col relative'>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="number" name="" id="phone" required placeholder="Enter your Phone Number " className='lg:w-[350px] w-full md:w-350px p-4 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.phone} />
                  <Image
                    src="/ast.svg"
                    width={8}
                    height={8}
                    alt="card" className='absolute top-2 right-2' />
                </div>
                <div className='flex flex-col relative'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="" id="email" required placeholder="Enter your Email Address" className='lg:w-[350px] w-full md:w-350px p-4 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.email} />
                  <Image
                    src="/ast.svg"
                    width={8}
                    height={8}
                    alt="card" className='absolute top-2 right-2' />
                </div>
              </div>
              <div className='flex flex-col relative'>
                <label htmlFor="address">Address</label>
                <input type="text" name="" id="address" required placeholder="Enter your Address " className='w-full p-4 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.address} />
                <Image
                  src="/ast.svg"
                  width={8}
                  height={8}
                  alt="card" className='absolute top-2 right-2' />
              </div>
              <div className="flex gap-6 flex-col md:flex-row">
                <div className='flex flex-col relative'>
                  <label htmlFor="country">Country</label>
                  <input type="text" name="" id="country" required placeholder="Enter your Country" className='lg:w-[350px] w-full md:w-350px p-4 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.country} />
                  <Image
                    src="/ast.svg"
                    width={8}
                    height={8}
                    alt="card" className='absolute top-2 right-2' />
                </div>
                <div className='flex flex-col relative'>
                  <label htmlFor="city">City</label>
                  <input type="text" name="" id="city" required placeholder="Enter your City " className='lg:w-[350px] pr-10 md:w-350px p-4 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.city} />
                  <Image
                    src="/ast.svg"
                    width={8}
                    height={8}
                    alt="card" className='absolute top-2 right-2' />
                </div>
              </div>
            </div>
            <h1 className="font-[500] text-[31.25px] mt-4">Payment Method</h1>
            <p className="font-[500] text-[12.8px] my-2">Select a Payment Method</p>
            <div className='flex gap-y-4 flex-col'>
              <div className="flex justify-between w-[300px]">
                <div className="flex space-x-2  ">
                  <Image
                    src="/card.png"
                    width={24}
                    height={24}
                    alt="card" />
                  <label htmlFor="card" className='font-[400] text-[16px] hover:text-[#251f73]'>Debit/Credit Card</label></div>
                <input type="radio" name="option" id="card" className='appearance-none border-[#251f73] checked:bg-[#251f73] border-2 rounded-full w-6 h-6' />
              </div>
              <div className="flex justify-between w-[300px]">
                <div className="flex space-x-2  ">
                  <Image
                    src="/vec.png"
                    width={24}
                    height={24}
                    alt="card" />
                  <label htmlFor="internet" className='font-[400] text-[16px] hover:text-[#251f73]'>Internet Banking</label></div>
                <input type="radio" name="option" id="internet" className='appearance-none border-[#251f73] checked:bg-[#251f73] border-2 rounded-full w-6 h-6' />
              </div>
              <div className="flex justify-between w-[300px]">
                <div className="flex space-x-2  ">
                  <Image
                    src="/vec.png"
                    width={24}
                    height={24}
                    alt="card" />
                  <label htmlFor="bank" className='font-[400] text-[16px] hover:text-[#251f73]'>Bank</label></div>
                <input type="radio" name="option" id="bank" className='appearance-none border-[#251f73] checked:bg-[#251f73] border-2 rounded-full w-6 h-6' />
              </div>
              <div className="flex justify-between w-[300px]">
                <div className="flex space-x-2  ">
                  <Image
                    src="/phone.png"
                    width={24}
                    height={24}
                    alt="card" />
                  <label htmlFor="option1" className='font-[400] text-[16px] hover:text-[#251f73]'>USSD</label></div>
                <input type="radio" name="option" id="ussd" className='appearance-none border-[#251f73] checked:bg-[#251f73] border-2 rounded-full w-6 h-6' />
              </div>

            </div>
            <div className='grid gap-6 mt-5'>
              <div className='flex gap-6 flex-col md:flex-row'>
                <div className="flex flex-col relative">
                  <label htmlFor="card">Card Number</label>
                  <input type="number" name="" id="card" required placeholder="Enter Card number" className='lg:w-[350px]  md:w-350px pl-10 p-4 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.card} />
                  <Image
                    src="/card.png"
                    width={24}
                    height={24}
                    alt="card" className='absolute top-10 left-2' />
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" name="" id="cvv" required placeholder="Enter Card CVV" className='lg:w-[350px] w-full md:w-350px p-4 pl-10 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.cvv} />
                  <Image
                    src="/lock.png"
                    width={24}
                    height={24}
                    alt="card" className='absolute top-10 left-2' />
                </div>
              </div>
              <div className='flex gap-6 flex-col md:flex-row'>
                <div className="flex flex-col relative">
                  <label htmlFor="exp">Expire Date</label>
                  <input type="text" name="" id="exp" required placeholder="MM / YY " className='lg:w-[350px] w-full md:w-350px p-4 pl-10 bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.exp} />
                  <Image
                    src="/calendar.png"
                    width={24}
                    height={24}
                    alt="card" className='absolute top-10 left-2' />
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="holder">Card Holder Name</label>
                  <input type="text" name="" id="holder" required placeholder="Enter Card Name " className='lg:w-[350px] w-full md:w-350px p-4 pl-10 
                bg-transparent border rounded-lg border-[#251f73]' onChange={(e) => handle(e)} value={regData.holder} />
                  <Image
                    src="/user.png"
                    width={24}
                    height={24}
                    alt="card" className='absolute top-10 left-2' />
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
            <button className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-2 w-full rounded-md hover:border">Checkout</button>
            <div className="text-black text-[16px] font-medium hover:text-white bg-transparent hover:bg-[#251F73] text-center p-2 w-full rounded-md border cursor-pointer" onClick={clearCart}>Cancel</div>
          </div>
        </form>
        {openModal &&
          <div className="w-full flex justify-center h-full items-center mx-auto">
            <Thanks setOpenModal={setOpenModal} />
          </div>}
      </div>
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