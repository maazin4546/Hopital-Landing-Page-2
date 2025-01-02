import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaWifi, FaRegClock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Upper_Nav = () => {
    return (
        <div className='md:flex hidden justify-around items-center bg-blue-900 p-2'>
            <div className='flex'>
                <div className='flex items-center mx-4'>
                    <MdOutlineMail fontSize={22} className='mx-2 cursor-pointer'/>
                    <Link href={"/"}>Support@MedDoctors.com</Link>
                </div>
                <div className='flex items-center mx-4'>
                    <FaLocationDot className='mx-2 cursor-pointer'/>
                    <Link href={"/"}>140 Street Brooklyn, New York</Link>
                </div>
                <div className='flex items-center mx-4'>
                    <FaRegClock className='mx-2 cursor-pointer'/>
                    <Link href={"/"}>Mon-Fri : 8:00 AM - 7:00 PM</Link>
                </div>
            </div>

            <div className='flex justify-between'>
                <FaFacebook className='mx-2 cursor-pointer'/>
                <FaTwitter className='mx-2 cursor-pointer'/>
                <FaWifi className='mx-2 cursor-pointer'/>
                <FaLinkedinIn className='mx-2 cursor-pointer'/>
            </div>
        </div>
    )
}

export default Upper_Nav;