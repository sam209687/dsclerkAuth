import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'


export default function NavigationPage() {
 
  return (
    <header className='sticky top-0 w-full border-b'>
      <div className='p-6 h-16 flex items-center justify-between'>
      {/* Desktop view code goes here  */}
        
        <DesktopNav />
    

      {/* mobile rsponsive view code goes here  */}
      <MobileNav />
      </div>
    </header>
  )
}
