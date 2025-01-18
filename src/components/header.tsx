import Link from 'next/link'
import React from 'react'
import { SearchIcon,ShoppingCartIcon} from 'lucide-react';
import { CgProfile } from "react-icons/cg";
import { SheetSide } from './sheet';
import { NavigationMenuDemo } from './navigationMenu';
export default function header() {
  return (
  <div className='h-[41px] md:w-[1240px] w-full mt-[24px] mb-[24px] mx-auto flex justify-between items-center'>
 <div className='flex justify-start items-center'>
  <SheetSide/>
    <h2 className='font-extrabold text-2xl'>SHOP.CO</h2>
    </div>
    {/* navbar */}
    <ul className='hidden md:block'>
        <li className='flex space-x-6 items-center'>
        <Link href="/">
        <NavigationMenuDemo/>
        </Link>
        <Link href="/">On Sale</Link>
        <Link href="/products">New Arrivals</Link>
        <Link href="/">Brands</Link>
        </li>
    </ul>
    <div className=' hidden md:block '>
            <div className=' flex justify-start items-center md:w-[450px] w-full h-[38px] bg-[#F0F0F0] rounded-[62px]  '>
            <SearchIcon className="text-xl ml-4 text-gray-400" />
            <input
            type="text"
            className="md:w-[500px] w-full h-full bg-[#F0F0F0]  outline-none rounded-[62px] "
            placeholder="Search for products"
          />
         
          </div>
          </div>
       
       <div className='flex justify-end md:w-[100px] w-full items-center space-x-6 mr-4 md:mr-0'>
          <SearchIcon className=" h-6 w-6 md:hidden" />  
         {/* cart */}
        <Link href={"/cart"}><ShoppingCartIcon className="h-6 w-6" /></Link>
        {/* login  */}
         <CgProfile className="h-6 w-6" />
       
           </div>
 </div>
  )
}
