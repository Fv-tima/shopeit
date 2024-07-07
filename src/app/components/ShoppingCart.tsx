"use client"
import { useShoppingCart } from "../context/ShoppingCartContext"
import Link from "next/link"
import CartItemCon from "./CartItemCon"
import { products } from "@/product"



export default function ShoppingCart() {
  const { cartItems, cartQuantity } = useShoppingCart()
  const total = cartItems.reduce((total, cartItem) => {
    const item = products.find(i => i.id === cartItem.id);
    const price = item?.price ?? 0; // Use nullish coalescing for default price
    return total + (price * cartItem.quantity);
  }, 0)
  return (
    <div>
      <div className=" text-white p-[40px] text-center bg-[#251f73]">
        {cartQuantity === 0 ? <h1 className="font-[700] md:text-[60px] text-[40px]">No product added</h1> : <h1 className="md:text-[60px] text-[40px]">Cart Added</h1>}
      </div>
      <div className="flex md:flex-row flex-col w-full h-full p-8 justify-center items-center md:items-start gap-x-14">
      <div className="flex flex-col  justify-center rounded-full ">
      <div className="flex text-white h-20 px-2 items-center bg-[#251f73] font-[500] text-[20px]  rounded-md">
          <h1 className=" md:w-[259px] w-[100px]">Product</h1>
          <h1 className=" w-[55px] md:w-[86px]">Color</h1>
          <h1 className=" w-[50px] md:w-[86px]">Size</h1>
          <h1 className=" md:w-[86px] pr-2">Quantity</h1>
          <h1 className="w-[50px] md:w-[86px]" >Price</h1>
          <h1 className="w-[50px] md:w-[86px]"></h1>
        </div>
      {cartItems.map((item) => (
        <CartItemCon key={item.id}{...item} />
      ))}
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
    <Link href="/checkout">
    <button className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-2 w-full rounded-md hover:border">Checkout</button>
    </Link>
  </div>
      </div>
    </div>
  )
}

