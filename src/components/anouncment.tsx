import Link from 'next/link'
import React from 'react'

export default function anouncment () {
  return (
    <div>
       <div className='bg-black text-white max-w-full h-[38px] text-lg flex justify-center items-center relative'>
        <h4>Sign up and get 20% off to your first order.</h4>
        <Link href="/" className='hover:underline'>Sign Up Now</Link>
        <div>
          <button className="text-white text-sm absolute right-3 transform -translate-y-1/2 -translate-x-1 hidden sm:block ">X</button>
        </div>
       
       </div>
        

    </div>
  )
}
