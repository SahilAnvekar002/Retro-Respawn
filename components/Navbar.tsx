"use client"
import React, { useRef, useState } from 'react'
import { Squash } from 'hamburger-react'
import Link from 'next/link';

function Navbar() {

  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    if(ref.current?.classList.contains('translate-x-full')){
      ref.current?.classList.replace('translate-x-full', 'translate-x-0');
    }else{
      ref.current?.classList.replace('translate-x-0', 'translate-x-full');
    }
  }

  return (
    <>
      <div className='fixed top-0 left-0 flex justify-between items-center w-full z-30 py-6 backdrop-blur-sm' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <div className='pl-14 md:pl-20 lg:pl-28 xl:pl-40'>
          <h1 className='text-2xl text-white font-semibold tracking-widest'>Retro Respawn</h1>
        </div>
        <ul className='hidden md:flex md:pr-20 lg:pr-28 xl:pr-40'>
          <li className='list-none'><Link href="/" className='text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black'>Home</Link></li>
          <li className='list-none'><Link href="/about" className='text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black'>About</Link></li>
          <li className='list-none'><Link href="/service" className='text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black'>Service</Link></li>
          <li className='list-none'><Link href="/contact" className='text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black'>Contact</Link></li>
          <li className='list-none'><Link href="/blog" className='text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black'>Blog</Link></li>
        </ul>
        <div className='flex md:hidden pr-10 md:pr-20 lg:pr-28 xl:pr-40'>
          <Squash toggled={isOpen} color='white' toggle={()=>{setIsOpen(!isOpen) , toggleSidebar()}} />
        </div>
      </div>

      <div className={`flex fixed top-0 right-0 bg-zinc-950 w-96 h-full flex-col items-center mb-6 z-20 py-28 transform translate-x-full transition-transform duration-300`} ref={ref}>
        <ul>
          <li className='list-none mb-2'><Link href="/" className='text-white text-lg'>Home</Link></li>
          <li className='list-none mb-2'><Link href="/about" className='text-white text-lg'>About</Link></li>
          <li className='list-none mb-2'><Link href="/service" className='text-white text-lg'>Service</Link></li>
          <li className='list-none mb-2'><Link href="/contact" className='text-white text-lg'>Contact</Link></li>
          <li className='list-none mb-2'><Link href="/blog" className='text-white text-lg'>Blog</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
