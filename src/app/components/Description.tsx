import React from 'react'

export default function Description() {
  return (
    <div className='bg-[#251f73] p-[40px] text-white'>
      <h1 className='text-[31.25px] font-[500]'>Description</h1>
      <div className='grid  md:grid-cols-3 gap-6'>
        <div className="flex flex-col space-y-6 border border-white p-2 pb-4 rounded-md">
          <h1 className='font-[700] text-[16px]'>Fabric</h1>
          <p className='font-[400] text-[12.8px]'>Crafted from high-quality chiffon, this gown offers a luxurious feel and graceful drape. The lightweight material ensures comfort throughout the evening.
          </p>
        </div>
        <div className="flex flex-col space-y-6 border border-white p-2 pb-4  rounded-md">
          <h1 className='font-[700] text-[16px]'>Colors</h1>
          <p className='font-[400] text-[12.8px]'>Available in an array of elegant colors including classic black, deep navy, romantic blush, and vibrant red, allowing you to choose the perfect hue for your event.
          </p>
        </div>
        <div className="flex flex-col space-y-6 border border-white p-2 pb-4 rounded-md">
          <h1 className='font-[700] text-[16px]'>Size</h1>
          <p className='font-[400] text-[12.8px]'>Offered in a range of sizes from XS to XXL, catering to various body shapes and ensuring a perfect fit for everyone.
          </p>
        </div>
        <div className="flex flex-col space-y-6 border border-white p-2 pb-4 rounded-md">
          <h1 className='font-[700] text-[16px]'>Details</h1>
          <p className='font-[400] text-[12.8px]'>Delicate beadwork embellishes the bodice, adding a hint of sparkle without overwhelming the design. The gown also includes a hidden zipper at the back for a seamless look and ease of wear.
          </p>
        </div>
        <div className="flex flex-col space-y-6 border border-white p-2 pb-4 rounded-md">
          <h1 className='font-[700] text-[16px]'>Design</h1>
          <p className='font-[400] text-[12.8px]'>The gown features a flattering A-line silhouette that suits all body types, accentuating the waist while providing a flowy, graceful skirt. A V-neckline adds a touch of allure, while the subtle pleating at the bodice creates a refined look.
          </p>
        </div>
        <div className="flex flex-col space-y-6 border border-white p-2 pb-4 rounded-md">
          <h1 className='font-[700] text-[16px]'>Occasion</h1>
          <p className='font-[400] text-[12.8px]'>Occasion
            Ideal for weddings, formal parties, proms, galas, and any other black-tie event where you want to make a statement.
          </p>
        </div>
      </div>
    </div>
  )
}
