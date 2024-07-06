"use client"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { products } from "@/product"
import Image from "next/image"

type CartItemProps = {
  id: number
  quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity, cartQuantity } = useShoppingCart()
  const item = products.find(i => i.id === id)
  if (item == null) return null
  return (
    <div> 
     <table className="table-auto m-6 rounded-full px-6" >
  <thead className=" text-white h-20 text-center bg-[#251f73] font-[500] text-[20px] rounded-md ">
    <tr>
      <th className="p-2 text-start">Product</th>
      <th className="p-2">Color</th>
      <th className="p-2">Size</th>
      <th className="p-2">Quantity</th>
      <th className="p-2">Price</th>
      <th className="p-2"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="flex p-2 justify-center items-center space-x-1">
      <Image
      src="/tick.svg"
      width={24}
      height={24}
      alt="image" />
         <Image
      src={item.img}
      width={58}
      height={75}
      alt="image" />
      <h1 className="text-[16px] font-[500]">{item.title}</h1></td>
      <td className="text-[16px] font-[500]  p-2">Blue</td>
      <td className="text-[16px] font-[500]  p-2">XL</td>
      <td className=" p-2"><div className="flex space-x-2 text-md "><button className=" text-sm px-2 bg-black text-white rounded-md" onClick={() => increaseCartQuantity(item.id)}>+</button><span>{cartQuantity}</span><button className="px-2 text-sm bg-black text-white rounded-md" onClick={() => decreaseCartQuantity(item.id)}>-</button>
      </div></td>
      <td className="p-2"> <p className="text-[16px] font-[500]">${item.price * quantity}</p></td>
      <td className="p-2">  <Image
      src="/trash.svg"
      width={24}
      height={24}
      alt="image" /></td>
    </tr>
    <hr  className="flex"/>
  </tbody>
</table>
      </div>
  )
}
