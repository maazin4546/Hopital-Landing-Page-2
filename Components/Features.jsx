import Image from 'next/image'
import { FaEye, FaLink } from "react-icons/fa";

const Features = () => {
    return (
        <div id='page'>
            <div className="flex flex-col md:flex-row justify-start md:justify-around p-4 px-4 md:px-8 pt-12 md:pt-16 space-y-6 md:space-y-0 md:space-x-8">
                <div className="text-left">
                    <p className="text-sky-500 font-medium">Feature's Gallery</p>
                    <h1 className="text-blue-900 text-3xl md:text-4xl font-bold mt-2">
                        All Our Latest Case Study
                    </h1>
                </div>

                <div className="text-left md:w-1/2 space-y-4">
                    <p className="text-gray-500">
                        Meddox Are A Medical And Health Department Provider Institutions. Suitable
                        For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                        Any Related Medical Care Field.
                    </p>
                    <button className="px-6 py-3 text-white bg-sky-400 hover:bg-sky-600 transition">
                        View All Gallery
                    </button>
                </div>
            </div>

            <div className='mt-16 flex flex-wrap justify-center items-center gap-3'>

                <div className="group relative w-[350px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <Image
                        src="/assets/feature1.jpg"
                        width={350}
                        height={300}
                        alt="Feature"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-sky-400 bg-opacity-50 flex flex-col items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex gap-2 ml-3'>
                            <FaEye fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                            <FaLink  fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-3'>
                            <p className='text-white my-4'>Research</p>
                            <h3 className="text-white text-xl font-bold">Feature Heading</h3>
                        </div>
                    </div>
                </div>

                <div className="group relative w-[350px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <Image
                        src="/assets/feature2.jpg"
                        width={350}
                        height={300}
                        alt="Feature"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-sky-400 bg-opacity-50 flex flex-col items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex gap-2 ml-3'>
                            <FaEye fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                            <FaLink  fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-3'>
                            <p className='text-white my-4'>Surgery</p>
                            <h3 className="text-white text-xl font-bold">Treat Transplant</h3>
                        </div>
                    </div>
                </div>

                <div className="group relative w-[350px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <Image
                        src="/assets/feature3.jpg"
                        width={350}
                        height={300}
                        alt="Feature"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-sky-400 bg-opacity-50 flex flex-col items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex gap-2 ml-3'>
                            <FaEye fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                            <FaLink  fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-3'>
                            <p className='text-white my-4'>Medical</p>
                            <h3 className="text-white text-xl font-bold">Modern Medicine</h3>
                        </div>
                    </div>
                </div>

                <div className="group relative w-[350px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <Image
                        src="/assets/feature4.jpg"
                        width={350}
                        height={300}
                        alt="Feature"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-sky-400 bg-opacity-50 flex flex-col items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex gap-2 ml-3'>
                            <FaEye fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                            <FaLink  fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-3'>
                            <p className='text-white my-4'>Departments</p>
                            <h3 className="text-white text-xl font-bold">Bariatic Surgery</h3>
                        </div>
                    </div>
                </div>

                <div className="group relative w-[350px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <Image
                        src="/assets/feature5.jpg"
                        width={350}
                        height={300}
                        alt="Feature"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-sky-400 bg-opacity-50 flex flex-col items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex gap-2 ml-3'>
                            <FaEye fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                            <FaLink  fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-3'>
                            <p className='text-white my-4'>Research</p>
                            <h3 className="text-white text-xl font-bold">Medical Scanner</h3>
                        </div>
                    </div>
                </div>

                <div className="group relative w-[350px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <Image
                        src="/assets/feature6.jpg"
                        width={350}
                        height={300}
                        alt="Feature"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-sky-400 bg-opacity-50 flex flex-col items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className='flex gap-2 ml-3'>
                            <FaEye fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                            <FaLink  fontSize={50} color='skyBlue' className='bg-slate-100 p-3 cursor-pointer'/>
                        </div>
                        <div className='flex flex-col ml-3'>
                            <p className='text-white my-4'>Surgery</p>
                            <h3 className="text-white text-xl font-bold">Complete Surgery</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Features