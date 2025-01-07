import { Footer_link, Footer_link2, Footer_link3 } from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='contact' className='bg-blue-950'>
            <div className='py-8 flex flex-col md:flex-row gap-3 md:gap-0 justify-center md:justify-around items-center'>
                <h1 className='text-xl text-white font-semibold'>Subscribe To Our Newsletter</h1>
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                    <button className="px-6 py-2 bg-sky-500 text-white font-semibold rounded-r-md hover:bg-sky-600 transition duration-300">
                        Subscribe
                    </button>
                </div>
            </div>

            <hr className="border-t-1 border-blue-800" />

            <div className='mt-12 flex flex-wrap flex-col md:flex-row justify-start ml-8 md:ml-0 gap-12 md:gap-0 md:justify-around items-start pb-6'>
                <div>
                    <div className='flex items-center'>
                        <Image
                            src="/assets/nav_icon.png"
                            width={50}
                            height={50}
                            alt='logo'
                            className='cursor-pointer'
                        />
                        <h1 className='text-4xl text-white font-bold ml-1'>Meddox</h1>
                    </div>
                    <div className='w-full md:w-80 my-6'>
                        <p className='text-white leading-[30px]'>Meddox Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field.</p>
                    </div>

                    <div className='flex gap-2'>
                        <FaFacebookF fontSize={30} className="bg-white p-2 rounded-md cursor-pointer group text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300" />
                        <FaTwitter fontSize={30} className="bg-white p-2 rounded-md cursor-pointer group text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300" />
                        <FaInstagram fontSize={30} className="bg-white p-2 rounded-md cursor-pointer group text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300" />
                        <FaWhatsapp fontSize={30} className="bg-white p-2 rounded-md cursor-pointer group text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300" />
                    </div>
                </div>

                <div>
                    <h1 className='text-lg text-white font-semibold mb-6'>Quick Link</h1>
                    {Footer_link.map((items, index) => (
                        <Link
                            key={index}
                            href="/"
                            className="my-2 flex items-center text-white group hover:text-sky-500 transition duration-300"
                        >
                            <span className="opacity-0 group-hover:opacity-100 transition duration-300">
                                →
                            </span>
                            <span className="ml-2">{items.title}</span>
                        </Link>
                    ))}
                </div>

                <div>
                    <h1 className='text-lg text-white font-semibold mb-6'>Help Link</h1>
                    {Footer_link2.map((items, index) => (
                        <Link
                            key={index}
                            href="/"
                            className="my-2 flex items-center text-white group hover:text-sky-500 transition duration-300"
                        >
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
                                →
                            </span>
                            <span className="ml-2">{items.title}</span>
                        </Link>
                    ))}
                </div>

                <div>
                    <h1 className='text-lg text-white font-semibold mb-6'>Open - Closed Time</h1>
                    {Footer_link3.map((elem, index) => (
                        <>
                            <div className='flex justify-between text-white text-sm my-2'>
                                <p>{elem.title}</p>
                                <p>8.00 - 21.00</p>
                            </div>
                            <hr className="border-t-1 border-blue-300" />
                        </>
                    ))}
                </div>
            </div>


            <div className='flex flex-col md:flex-row gap-4 md:gap-0 pl-4 md:pl-0 justify-around bg-blue-900 py-8'>
                <p className='text-white'>@2025 Meddox. With Love By BravisThemes</p>
                <div className='flex gap-3'>
                    <Link href={"/"} className='text-white hover:text-blue-500 text-sm'>Terms & Conditions</Link>
                    <Link href={"/"} className='text-white hover:text-blue-500 text-sm'>Privacy Policy</Link>
                    <Link href={"/"} className='text-white hover:text-blue-500 text-sm'>Sitemap</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer