import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { TbSolarElectricity } from "react-icons/tb";

export default function DesktopNav() {
  const { userId } = auth();
  return (
    <div className="hidden md:flex justify-between items-center w-full ">
      <Link href={"/"}>
        <TbSolarElectricity className="h-16 w-16 text-sky-500" />
      </Link>
      <nav className="flex gap-10  ">
        <Link className="hover:text-yellow-400" href="/">
          Home
        </Link>
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">About Us</Link>
      </nav>
      <div className="flex items-center flex-block">
        {!userId ? (
          <>
            <Link href="/sign-in">
              <button className="px-5 py-2 outline outline-fuchsia-500 rounded-xl hover:bg-zinc-100 hover:outline-none hover:text-black transition duration-500">
                Login
              </button>
            </Link>
          </>
        ) : (
          <>
            
            {/* <Link href="/profile">
               <li>Profile</li>
              
            </Link> */}
           
            <li className="flex items-center">
               <UserButton />
             
            </li>
            
          </>
        )}
        
      </div>
    </div>
  );
}
