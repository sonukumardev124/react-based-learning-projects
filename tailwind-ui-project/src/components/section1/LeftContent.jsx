import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 p-10 '>
      <div className='p-6'>
        <div className="hero-text flex flex-col text-[3rem] font-bold">
          <h3>Prospective</h3>
          <div className="customer-container bg-gray-500 w-fit px-2 flex items-center rounded-full">
            <h3>Customer</h3>
          </div>
          <h3>Segmentation</h3>
        </div>
        <p className='text-2xl font-medium text-gray-600'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
      </div>
      <div className='text-black text-7xl'>
        <LuArrowUpRight />
      </div>
    </div>
  )
}

export default LeftContent
