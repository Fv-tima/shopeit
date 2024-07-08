"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCartContext";



export default function Nav() {
  const { cartQuantity } = useShoppingCart()
  const [openNav, setOpenNav] = useState(false);
  
  const  pathname = usePathname();


  const open = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <nav className="py-[20px] px-[40px] fixed bg-[#fffffc] w-full md:h-20 top-0 z-50">
      <div className="flex justify-between items-center h-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={83}
            height={38}
            alt="logo" />
        </Link>
        <div className="flex-row items-center  md:flex md:justify-between space-x-[30px] hidden">
          {navItems.map((item) => (
            <ul key={item.id}>
              <Link href={item.link}><li className={`text-black text-[16px] font-medium hover:text-white  p-2 w-full hover:rounded-md hover:bg-[#251f73] ${pathname === item.link ? 'bg-[#251F73] rounded-md text-white ' :""} `}>{item.item}
              </li></Link>
            </ul>
          ))}
        </div>
        <div className=":flex items-center  space-x-[30px] hidden">
        <button className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-2 w-full rounded-md hover:border">Login</button>
          <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-md border">Register</button>
        </div>
        <div className="flex items-center  space-x-[30px] ">
        <Image
            src="/search.svg"
            width={24}
            height={24}
            alt="search" />
            <Link href="/cart" className="relative">
               <Image
            src="/cart.svg"
            width={24}
            height={24}
            alt="heart" />
            <span className="rounded-full text-white text-sm px-1 bg-[#97BF38] bottom-3 left-3 absolute">{cartQuantity}</span>
            </Link>
               <Image
            src="/heart.svg"
            width={24}
            height={24}
            alt="heart" />
        </div>
        <button className="md:hidden" onClick={open}>
          {openNav ? <Image
            src="/menu.svg"
            width={24}
            height={24}
            alt="close" /> :
            <Image
              src="/menu.svg"
              width={24}
              height={24}
              alt="open" />}
        </button>
      </div>
      {openNav && (
        <div className="md:hidden mt-4 h-screen justify-start flex flex-col" >
          <div className="flex flex-col space-y-[16px] items-start  mt-6" onClick={open}>
            {navItems.map((item) => (
              <ul key={item.id} >
                 <Link href={item.link}><li className={`text-black text-[16px] font-medium hover:text-white  p-2 w-full hover:rounded-md hover:bg-[#251f73] ${pathname === item.link ? 'bg-[#251F73] rounded-md text-white ' :""} `}>{item.item}
                 </li></Link>
              </ul>
            ))}
          </div>
          <div className="flex mt-8 justify-start items-center space-x-[30px] md:hidden">
        <button className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-2 w-full rounded-lg hover:border">Login</button>
          <button className="text-black text-[16px] font-medium hover:text-white hover:bg-[#251F73] p-2 w-full rounded-lg border">Register</button>
        </div>
        </div>
      )}
    </nav>
  )
}

export const navItems = [
  {id:1,
    item:"Home",
    link:"/home"
  },
  {id:2,
    item:"Product",
    link:"/"
  },
  {id:3,
    item:"About us",
    link:"/about"
  },
  {id:4,
    item:"Service",
    link:"/service"
  },
  {id:5,
    item:"Contact us",
    link:"/contact"
  }
]