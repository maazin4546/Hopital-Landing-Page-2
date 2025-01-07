"use client"
import Image from 'next/image';
import Link from 'next/link'
import { TfiMenuAlt } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed w-full z-50 flex md:justify-around justify-between px-3 md:px-0 items-center bg-white p-2 transition-all duration-300 ${isScrolled ? 'top-0 shadow-lg' : 'top-0 md:top-10'
                }`}
        >
            <a href="#home">
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
            </a>

            <div className="md:hidden flex">
                <GiHamburgerMenu
                    fontSize={30}
                    color="darkBlue"
                    className="cursor-pointer"
                    onClick={toggleSidebar}
                />
            </div>

            <div className='md:flex hidden gap-6 relative'>

                <div className="relative group">
                    <a href="#home" className='text-blue-900 font-semibold hover:text-sky-500'>Home +</a>
                    <div className="absolute left-0 hidden group-hover:flex flex-col bg-white w-36 shadow-lg p-2">
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Home 1</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Home 2</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Home 3</Link>
                    </div>
                </div>

                <div className="relative group">
                    <a href="#about" className='text-blue-900 font-semibold hover:text-sky-500'>About Us +</a>
                    <div className="absolute left-0 hidden group-hover:flex flex-col bg-white w-36 shadow-lg p-2">
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">About 1</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">About 2</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">About 3</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">About 4</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">About 5</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">About 6</Link>
                    </div>
                </div>

                <div className="relative group">
                    <a href="#department" className='text-blue-900 font-semibold hover:text-sky-500'>Department +</a>
                    <div className="absolute left-0 hidden group-hover:flex flex-col bg-white w-64 shadow-lg p-2">
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Department 1</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Department 2</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Department Details</Link>
                    </div>
                </div>

                <div className="relative group">
                    <a href="#page" className='text-blue-900 font-semibold hover:text-sky-500'>Page +</a>
                    <div className="absolute left-0 hidden group-hover:flex flex-col bg-white w-64 shadow-lg p-2">
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Doctors Timetable</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Appointment 1</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Appointment 2</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Gallery 1</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Gallery 2</Link>
                    </div>
                </div>

                <div className="relative group">
                    <a href="#blog" className='text-blue-900 font-semibold hover:text-sky-500'>Blog +</a>
                    <div className="absolute left-0 hidden group-hover:flex flex-col bg-white w-64 shadow-lg p-2">
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Blog Grid</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Blog Grid Sidebar</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Blog Standard</Link>
                        <Link href={"/"} className="text-blue-900 px-4 py-2 hover:bg-blue-100">Single Blog</Link>
                    </div>
                </div>

                <a href="#contact" className='text-blue-900 font-semibold hover:text-sky-500'>Contact</a>
            </div>


            <div className='md:flex hidden gap-3 items-center justify-between'>
                <FiSearch fontSize={22} color='darkBlue' className='cursor-pointer' />
                <div style={{ height: "30px", width: "1px" }} className='bg-gray-500 mx-2'></div>
                <MdLocalPhone fontSize={26} color='skyBlue' className='cursor-pointer mr-2' />
                <div>
                    <p className='text-gray-600 text-sm'>Phone Number</p>
                    <h1 className='text-blue-950 font-bold text-lg cursor-pointer hover:text-sky-500'>008860 9830</h1>
                </div>
                <div style={{ height: "30px", width: "1px" }} className='bg-gray-500 mx-2'></div>
                <TfiMenuAlt fontSize={22} color='darkBlue' className='cursor-pointer hover:text-sky-500' />
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
                    <a href="#home2" className="text-blue-900 font-semibold text-lg">
                        Home +
                    </a>
                    <a href="#about" className="text-blue-900 font-semibold text-lg">
                        About Us +
                    </a>
                    <a href="#department" className="text-blue-900 font-semibold text-lg">
                        Department +
                    </a>
                    <a href="#page" className="text-blue-900 font-semibold text-lg">
                        Page +
                    </a>
                    <a href="#blog" className="text-blue-900 font-semibold text-lg">
                        Blog +
                    </a>
                    <a href="#contact" className="text-blue-900 font-semibold text-lg">
                        Contact +
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Navbar