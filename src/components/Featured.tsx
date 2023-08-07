import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500 '>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single Items */}
        <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
          {/* Image Container */}
          <div className='relative flex-1 w-full'>
            <Image src='/temporary/p1.png' className='object-contain' alt='' fill />
          </div>
          {/* Text Container */}
          <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-xl font-bold uppercase'>Title</h1>
            <p>Description</p>
            <span className='text-xl font-bold'>$123</span>
            <button className='bg-red-500 text-white p-2 rounded-md '>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
