import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { CgMenuMotion } from "react-icons/cg";
import Link from 'next/link';
import { TbSolarElectricity } from 'react-icons/tb';


  

export default function MobileNav() {
  return (
    <div className='md:hidden '>
     
     <Sheet>
  <SheetTrigger className=''>
    <CgMenuMotion className='text-4xl font-bold hover:text-5xl transition-all duration-500 cursor-pointer ' />
  </SheetTrigger>
  <SheetContent side={"left"}>
  <Link href={"/"}>
    <TbSolarElectricity className='h-16 w-16 text-sky-500 mt-12' />

    </Link>
    <nav className='flex flex-col items-center mt-14 space-y-10 text-2xl  '>
        <Link className=' hover:bg-sky-500 px-6 py-2 rounded-xl hover:text-black transition-all duration-700' href='/'>Home</Link>
      
        <Link className='hover:bg-sky-500 px-6 py-2 rounded-xl hover:text-black transition-all duration-700' href='/'>Shop</Link>
        <Link className='hover:bg-sky-500 px-6 py-2 rounded-xl hover:text-black transition-all duration-700' href='/'>About Us</Link>
    </nav>
  </SheetContent>
</Sheet>

    </div>
  )
}
