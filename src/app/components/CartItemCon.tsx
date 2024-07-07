"use client"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { products } from "@/product"
import Image from "next/image"

type CartItemProps = {
  id: number
  quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity, cartQuantity, cartItems } = useShoppingCart()
  const item = products.find(i => i.id === id)
  if (item == null) return null
  return (
          <div className=" border-b-2 border-b-gray-400 flex items-center ">
            <div className="flex md:flex-row flex-col p-2 justify-center items-center gap-x-2 gap-y-2  md:w-[258px] w-[100px] ">
              <Image
                src="/tick.svg"
                width={24}
                height={24}
                alt="image" 
                className="hidden md:flex"
                />
              <Image
                src={item.img}
                width={58}
                height={75}
                alt="image"  className="bg-gray-400"/>
              <h1 className="text-[16px] font-[500] ">{item.title}</h1></div>
            <div className="text-[16px] font-[500] w-[55px] md:w-[86px] ">Blue</div>
            <div className="text-[16px] font-[500]  w-[50px] md:w-[86px]">XL</div>
            <div className=" w-[86px]"><div className="flex space-x-2 text-md "><button className=" text-sm px-2 bg-black text-white rounded-md" onClick={() => increaseCartQuantity(item.id)}>+</button><span>{quantity}</span><button className="px-2 text-sm bg-black text-white rounded-md" onClick={() => decreaseCartQuantity(item.id)}>-</button>
            </div></div>
            <div className="p-2"> <p className="text-[16px] w-[50px] md:w-[86px] font-[500]">${item.price * quantity}</p></div>
            <div className="p-2"> <button onClick={() => removeFromCart(item.id)}> <Image
              src="/trash.svg"
              width={24}
              height={24}
              alt="image" /></button></div>
          </div>
  )
}
