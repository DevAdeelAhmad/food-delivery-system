import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500 '>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single Items */}
        {
          featuredProducts.map(item => (
            <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
              {/* Image Container */}
              {item.img && (<div className='relative flex-1 w-full'>
                <Image src={item.img} className='object-contain' alt='Product Image' fill />
              </div>)}
              {/* Text Container */}
              <div className='flex flex-1 flex-col items-center text-center gap-4'>
                <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
                <p className='p-4'>{item.desc}</p>
                <span className='text-xl font-bold'>${item.price}</span>
                <button className='bg-red-500 text-white p-2 rounded-md '>Add to Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Featured
