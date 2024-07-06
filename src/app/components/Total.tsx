import Link from 'next/link'
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { products } from '@/product'

export default function Total() {
  const { cartItems
  } = useShoppingCart()
  const total = cartItems.reduce((total, cartItem) => {
    const item = products.find(i => i.id === cartItem.id);
    const price = item?.price ?? 0; // Use nullish coalescing for default price
    return total + (price * cartItem.quantity);
  }, 0)
  return (
    <div className="flex flex-col gap-y-4 w-full md:w-[500px]">
    <h1 className="bg-[#C3BEF6] p-2 font-[500] rounded-md text-[20px] md:flex hidden">Total for Product</h1>
    <div className="flex  justify-between w-full">
      <h1 className="text-gray-400 font-[400] text-[16px]">Sub Total</h1>
      <h1 className="font-[400] text-[16px]">{total}</h1>
    </div>
    <div className="flex  justify-between w-full">
      <h1 className="text-gray-400 font-[400] text-[16px]">Delivery</h1>
      <h1 className="font-[400] text-[16px]">${455}</h1>
    </div>
    <div className="flex  justify-between w-full">
      <h1 className="text-gray-400 font-[400] text-[16px]">Total</h1>
      <h1 className="font-[400] text-[16px]">${total + 455}</h1>
    </div>
    <Link href="/checkout">
    <button className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-2 w-full rounded-md hover:border">Checkout</button>
    </Link>
  </div>
  )
}
