import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 p-10'>
      <div className='p-6'>
        <h3 className='mb-6 text-6xl font-bold '>Prospective <br /> customer <br /> segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
      </div>
      <div className='text-black text-7xl'>
        <LuArrowUpRight />
      </div>
    </div>
  )
}

export default LeftContent
