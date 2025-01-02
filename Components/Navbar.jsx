"use client"
import Image from 'next/image';
import Link from 'next/link'
import { TfiMenuAlt } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex md:justify-around justify-between px-3 md:px-0 items-center bg-white p-2'>
            <div className='flex items-center'>
                <Image
                    src="/assets/nav_icon.png"
                    width={50}
                    height={50}
                    alt='logo'
                    className='cursor-pointer'
                />
                <h1 className='heading_color ml-2 cursor-pointer'>Meddox</h1>
            </div>

            <div className="md:hidden flex">
                <GiHamburgerMenu
                    fontSize={30}
                    color="darkBlue"
                    className="cursor-pointer"
                    onClick={toggleSidebar}
                />
            </div>

            <div className='md:flex hidden gap-6'>
                <Link href={"/"} className='text-blue-900 font-semibold'>Home +</Link>
                <Link href={"/"} className='text-blue-900 font-semibold'>About Us +</Link>
                <Link href={"/"} className='text-blue-900 font-semibold'>Department +</Link>
                <Link href={"/"} className='text-blue-900 font-semibold'>Page +</Link>
                <Link href={"/"} className='text-blue-900 font-semibold'>Blog +</Link>
                <Link href={"/"} className='text-blue-900 font-semibold'>Contact</Link>
            </div>

            <div className='md:flex hidden gap-3 items-center justify-between'>
                <FiSearch fontSize={22} color='darkBlue' className='cursor-pointer' />
                <div style={{ height: "30px", width: "1px" }} className='bg-gray-500 mx-2'></div>
                <MdLocalPhone fontSize={26} color='skyBlue' className='cursor-pointer mr-2' />
                <div>
                    <p className='text-gray-600 text-sm'>Phone Number</p>
                    <h1 className='text-blue-950 font-bold text-lg'>008860 9830</h1>
                </div>
                <div style={{ height: "30px", width: "1px" }} className='bg-gray-500 mx-2'></div>
                <TfiMenuAlt fontSize={22} color='darkBlue' className='cursor-pointer' />
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 block md:hidden left-0 h-full overflow-y-auto w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 z-50`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-blue-900 text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center px-6 py-4">
                    <Image
                        src="/assets/nav_icon.png"
                        width={50}
                        height={50}
                        alt="logo"
                        className="cursor-pointer"
                    />
                    <h1 className="heading_color ml-2 text-xl font-bold cursor-pointer">
                        Meddox
                    </h1>
                </div>

                {/* Search Field */}
                <div className="flex items-center px-6 py-4">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-2 pr-10 border-b-2 text-black border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <FiSearch
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            fontSize={20}
                            color='skyBlue'                            
                        />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-start gap-4 px-6 py-4">
                    <Link href="/" className="text-blue-900 font-semibold text-lg">
                        Home +
                    </Link>
                    <Link href="/about" className="text-blue-900 font-semibold text-lg">
                        About Us +
                    </Link>
                    <Link href="/department" className="text-blue-900 font-semibold text-lg">
                        Department +
                    </Link>
                    <Link href="/page" className="text-blue-900 font-semibold text-lg">
                        Page +
                    </Link>
                    <Link href="/blog" className="text-blue-900 font-semibold text-lg">
                        Blog +
                    </Link>
                    <Link href="/contact" className="text-blue-900 font-semibold text-lg">
                        Contact +
                    </Link>
                </div>
            </div>


        </div>

    )
}

export default Navbar