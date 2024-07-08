"use client"
import React from "react"
import { useState } from "react"
import Banner from "@/app/components/Banner"
import Link from "next/link"
import Description from "@/app/components/Description"
import { products } from "@/product"
import { useShoppingCart } from "@/app/context/ShoppingCartContext"
import Image from "next/image"
type ProdDetails = {
  productId: string,
}


export default function Page({ params }: { params: ProdDetails }) {
  const [fav, setFav] = useState(false)

  const click = () => {
    setFav(!fav)
  }
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  const product: any = products.find((item) => (item.id) === parseInt(params.productId))
  const similar = products.slice(0, 6);
  const alsolike = products.slice(-6);
  return (
    <div>
      <Banner />
      <div className="p-[40px]">
        <h1 className="font-[500] text-[31.25px]">Product Details</h1>
        <div className="flex flex-col md:flex-row md:space-x-16 justify-center items-center space-y-6 md:space-y-0 mt-4">
          <Image
            src={product.img}
            alt='images'
            width={530}
            height={649}
            className='rounded-md w-[342px] h-[369px] md:w-[400px] md:h-[500px] lg:w-[530px] lg:h-[649px] bg-gray-200' />
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-[500] text-[20px]">{product.title}</h1>
              <h1 className="font-[700] text-[16px] text-[#251f73]">${product.price}</h1>
              <Image src="/ratings.svg" alt='fav' width={175} height={20} /> <span>Likes</span>
            </div>
            <p className="font-[400] text-[12.8px]">{product.description}</p>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-[500] text-[25px]">Colors</h1>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
                <button className="text-white text-[16px] font-medium p-2 rounded-md bg-[#251f73] flex items-center space-x-2"> <Image src="/tick-.svg" alt='fav' width={24} height={24} /> <span>Blue</span></button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">Yellow</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">Black</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">Orange</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">White</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">Brown</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">Green</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">Purple</button>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-[500] text-[25px]">Size</h1>
              <div className="grid grid-cols-3 gap-2">
                <button className="text-white text-[16px] font-medium p-2 rounded-md bg-[#251f73] flex items-center space-x-2"> <Image src="/tick-.svg" alt='fav' width={24} height={24} /> <span>XL</span></button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">S</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">M</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">XXL</button>
                <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">L</button>
              </div>
            </div>
            <div className="flex space-x-2 text-md"><button className="px-2 bg-black text-white rounded-md" onClick={() => decreaseCartQuantity(product.id)}>-</button><span>{getItemQuantity(product.id)}</span><button className="px-2 bg-black text-white rounded-md" onClick={() => increaseCartQuantity(product.id)}>+</button>
            </div>
            <div className="flex space-x-2 items-center">
              <button onClick={() => increaseCartQuantity(product.id)} className=" text-[16px] font-medium text-white bg-[#251F73] p-2 rounded-md flex items-center space-x-2"><Image src="/car1.svg" alt='fav' width={24} height={24} /> <span>Add cart</span></button>
              <div className="flex space-x-2 items-center">
                <Link href="/">
                  <button className="text-black text-[16px] font-medium p-2 rounded-md border border-[#251f73] flex items-center space-x-2">Buy Now</button></Link>
                <Image src="/heart2.svg" alt='fav' width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description />
      <h1 className="font-500 text-[31.25px] p-6"> Review For Verified</h1>
      <div className="flex flex-col lg:flex-row justify-evenly items-start p-4 gap-y-6 md:gap-y-0">
        <Image src="/Review.png" alt='review' width={606} height={293} />
        <Image src="/customer.png" alt='review' width={637} height={465} />
      </div>
      <div>
        <div className="py-4">
          <h1 className="font-[700] text-[39.06px] p-4">Similar product</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center items-center gap-x-5 md:gap-x-8 gap-y-12 py-[20px] px-[20px]">{similar.map((item) => (
            <div className='flex' key={item.id}>
              <div className='flex flex-col w-[165px] h-[310px] space-y-2'>
                <div>
                  <Link href={`/products/${product.id}`}>
                    <Image src={item.img} alt='' width={164} height={215} className='rounded-md h-[215px] bg-gray-200' />
                  </Link>
                </div>
                <h2 className='font-[500] text-[14.8px]'>{product.title}</h2>
                <div className="flex justify-between w-full">
                  <h3 className=' font-[300] text-[12px]'>$ {product.price} <br /><span className='text-gray-400 line-through'>${product.price}</span></h3>
                  <h4 className="text-[10px] text-red-400 mt-auto ">20%</h4>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex space-x-1">
                    <Image src="/star.png" alt='star' width={24} height={24} />
                    <h2>4.5</h2>
                  </div>
                  <button onClick={() => increaseCartQuantity(product.id)} >
                    <Image src="/cart.svg" alt='cart' width={24} height={24} className='pointer' />
                  </button>
                </div>
              </div>

            </div>
          ))}</div>
        </div>
        <div className="py-4">
          <h1 className="font-[700] text-[39.06px] p-4">Most View by Customer</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center  gap-x-5 md:gap-x-8 gap-y-12 py-[20px] px-[20px]">{alsolike.map((item) => (
            <div className='flex' key={item.id}>
              <div className='flex flex-col w-[165px] h-[310px] space-y-2'>
                <div>
                  <Link href={`/products/${product.id}`}>
                    <Image src={item.img} alt='' width={164} height={215} className='rounded-md h-[215px] bg-gray-200' />
                  </Link>
                </div>
                <h2 className='font-[500] text-[14.8px]'>{product.title}</h2>
                <div className="flex justify-between w-full">
                  <h3 className=' font-[300] text-[12px]'>$ {product.price} <br /><span className='text-gray-400 line-through'>${product.price}</span></h3>
                  <h4 className="text-[10px] text-red-400 mt-auto ">20%</h4>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex space-x-1">
                    <Image src="/star.png" alt='star' width={24} height={24} />
                    <h2>4.5</h2>
                  </div>
                  <button onClick={() => increaseCartQuantity(product.id)} >
                    <Image src="/cart.svg" alt='cart' width={24} height={24} className='pointer' />
                  </button>
                </div>
              </div>

            </div>
          ))}</div>
        </div>
      </div>
    </div>
  )
}