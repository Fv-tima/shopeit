import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function ProductCard({ product }: any) {
  const { increaseCartQuantity } = useShoppingCart()
  const [fav, setFav] = useState(false)

  const click = () => {
    setFav(!fav)
  }
  return (
    <div className='flex'>
      <div className='flex flex-col w-[165px] h-[310px] space-y-2'>
        <div className="relative" >
          <Link href={`/products/${product.id}`}>
            <Image src={product.img} alt='' width={164} height={215} className='rounded-md h-[215px] bg-gray-500' />
          </Link>
          <button className='absolute top-2 right-2' onClick={click}>
            {fav ? <Image src="/heart2.svg" alt='fav' width={24} height={24} /> : <Image src="/Emheart.png" alt='fav' width={24} height={24} />}
          </button>
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
  )
}