"use client"
import { useShoppingCart } from "../context/ShoppingCartContext"
import Total from "./Total"
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
        {cartQuantity === 0 ? <h1 className="font-[700] md:text-[60px] text-[40px]">No product added</h1> : <h1 className="font-[700] text-[60px]">Cart Added</h1>}
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
     <Total/>
      </div>
    </div>
  )
}

