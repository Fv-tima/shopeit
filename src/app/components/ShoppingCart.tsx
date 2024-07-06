"use client"
import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItemCon from "./CartItemCon"
import { products } from "@/product"



export default function ShoppingCart() {
  const { cartItems, cartQuantity } = useShoppingCart()
  return (
    <div>
      <div className=" text-white p-[40px] text-center bg-[#251f73]">
        {cartQuantity === 0 ? <h1 className="font-[700] text-[60px]">No product added</h1> : <h1 className="font-[700] text-[60px]">Cart Added</h1>}
      </div>
      {cartItems.map((item) => (
        <CartItemCon key={item.id}{...item} />
      ))}
      <p>{cartItems.reduce((total, cartItem) => {
        const item = products.find(i => i.id === cartItem.id)
        return total + (item?.price || 0 * cartItem.quantity)
      }, 0)}</p>
    </div>
  )
}
