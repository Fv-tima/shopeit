"use client"
import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/product'
import Image from 'next/image'

export default function ProductsCon() {
  return (
    <div className='py-[20px] px-[20px]'>
      <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-0 md:justify-between p-4">
        <div className="flex space-x-2">
          <h1 className='font-[700] text-[31.25px]'>52,082+ Items </h1>
          <h1 className='font-[400] text-[31.25px] text-gray-400 md:flex hidden'>Showing 1-24 Results </h1>
        </div>
        <div className="flex space-x-6">  <button className="text-[16px] font-medium text-white bg-[#251F73] p-2 w-[200px] rounded-md ">Availabe Product</button>
          <button className="text-black text-[16px] font-medium p-2 rounded-md border">Filter</button></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-x-5 md:gap-x-8 gap-y-12 py-12">
        {
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </div>
      <Image
      src="/prodnav.png"
      width={476}
      height={105}
      alt="image" className='flex cursor-pointer my-6  justify-center items-center mx-auto md:w-[476px] md:h-[105px]  w-[289px] h-[56px]'/>
    </div>
  )
}
