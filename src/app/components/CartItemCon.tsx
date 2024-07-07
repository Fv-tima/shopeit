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
    <div>
      <div className="lg:flex hidden border-b-2 border-b-gray-400 items-center ">
        <div className="flex md:flex-row flex-col p-2 justify-start items-center gap-x-2 gap-y-2 md:w-[258px]  ">
          <Image
            src="/tick.svg"
            width={24}
            height={24}
            alt="image"
          />
          <Image
            src={item.img}
            width={58}
            height={75}
            alt="image" className="bg-gray-200 rounded-lg" />
          <h1 className="text-[16px] font-[500] ">{item.title}</h1></div>
        <div className="text-[16px] font-[500] w-[55px] md:w-[86px] pl-2">Blue</div>
        <div className="text-[16px] font-[500]  w-[50px] md:w-[86px] pl-2">XL</div>
        <div className=" w-[86px] pl-2"><div className="flex space-x-2 text-md "><button className=" text-sm px-2 bg-black text-white rounded-md" onClick={() => increaseCartQuantity(item.id)}>-</button><span>{quantity}</span><button className="px-2 text-sm bg-black text-white rounded-md" onClick={() => decreaseCartQuantity(item.id)}>+</button>
        </div></div>
        <div className="p-2 pl-6"> <p className="text-[16px] w-[50px] md:w-[86px] font-[500]">${item.price * quantity}</p></div>
        <div className="p-2"> <button onClick={() => removeFromCart(item.id)}> <Image
          src="/trash.svg"
          width={24}
          height={24}
          alt="image" /></button></div>
      </div>

      <div className="flex lg:hidden border rounded-lg md:rounded-none  border-gray-400 justify-start w-full items-center p-2 m-2 space-x-2 ">
        <Image
          src="/tick.svg"
          width={24}
          height={24}
          alt="image"
        />
        <Image
          src={item.img}
          width={58}
          height={75}
          alt="image" className="bg-gray-200 rounded-lg h-auto" />
        <div className="flex flex-col justify-between ">
          <h1 className="text-[16px] font-[500] ">{item.title}</h1>
          <p className="text-[8.19px] font-[400]">Blue</p>
          <p className="text-[8.19px] font-[400]">XL</p>
          <p className="text-[12.8px] text-[#251f73] font-[400]">${item.price * quantity}</p>
        </div>
        <div className="flex flex-col justify-between w-full items-end">
          <div className="p-2"> <button onClick={() => removeFromCart(item.id)}> <Image
            src="/trash.svg"
            width={24}
            height={24}
            alt="image" /></button></div>
        <div className="flex space-x-2 text-md "><button className=" text-sm px-2 bg-black text-white rounded-md" onClick={() => decreaseCartQuantity(item.id)}>-</button><span>{quantity}</span><button className="px-2 text-sm bg-black text-white rounded-md" onClick={() => increaseCartQuantity(item.id)}>+</button>
        </div>
        </div>
      </div>
    </div>
  )
}
