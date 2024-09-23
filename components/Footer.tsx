import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import React from 'react'

function Footer() {
    return (
        <footer className='px-20 md:px-32 py-12' style={{ backgroundColor: 'rgb(37, 42, 45)' }}>
            <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-widest italic mb-8">RETRO RESPAWN</h1>
            <span className='text-white text-sm font-semibold'>Pages</span>
            <div className='flex '>
                <ul className='mt-3 mb-10'>
                    <li className='list-none mb-1'><a href="/" className='text-gray-400 font-semibold text-xs hover:text-blue-600 transition-colors duration-300 ease-in-out'>Home</a></li>
                    <li className='list-none mb-1'><a href="/about" className='text-gray-400 font-semibold text-xs hover:text-blue-600 transition-colors duration-300 ease-in-out'>About Us</a></li>
                    <li className='list-none mb-1'><a href="/service" className='text-gray-400 font-semibold text-xs hover:text-blue-600 transition-colors duration-300 ease-in-out'>Services</a></li>
                    <li className='list-none mb-1'><a href="/contact" className='text-gray-400 font-semibold text-xs hover:text-blue-600 transition-colors duration-300 ease-in-out'>Contact Us</a></li>
                    <li className='list-none mb-1'><a href="/blog" className='text-gray-400 font-semibold text-xs hover:text-blue-600 transition-colors duration-300 ease-in-out'>Blogs</a></li>
                </ul>
                <div className='md:ml-80 sm:ml-44 ml-32'>
                    <IconBrandLinkedin size={30} color="rgb(37, 42, 45)" fill="white" className='mb-2 cursor-pointer'/>
                    <IconBrandInstagram size={30} color="rgb(37, 42, 45)" fill="white" className='mb-2 cursor-pointer'/>
                    <IconBrandTwitter size={30} color="rgb(37, 42, 45)" fill="white" className='mb-2 cursor-pointer'/>
                </div>
            </div>
            <p className='text-gray-400 font-semibold text-xs'>Company no: 120813966 / Address: Remera, Gasabo, City of Kigali, Rwanda
                <br /> © 2024 Retro Respawn, All rights reserved.</p>
        </footer>
    )
}

export default Footer
