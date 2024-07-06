import React from 'react'

export default function Banner() {
  return (
    <div className='banner text-white py-[220px] px-[40px]'>
      <div className="flex flex-col justify-end md:justify-center md:space-y-6 items-start w-full h-full">
        <h5 className="text-white font-[700] text-[16px] w-[169px]">“20% OFF <br />
        Limited Time Offer!”</h5>
        <h1 className="font-[700] text-[60px]">NEW COLLECTION</h1>
        <h4 className="font-[400] text-[20px]">Discover Your Style with Our Exclusive Clothing Sale!</h4>
        <button className="hover:text-black text-[16px] font-medium text-white hover:bg-transparent bg-[#251F73] p-4 rounded-md hover:border uppercase">shop now</button>
      </div>
    </div>
  )
}
