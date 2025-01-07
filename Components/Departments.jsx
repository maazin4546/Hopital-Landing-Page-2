import Image from 'next/image'
import { Cards_data } from '@/lib/data';


const Departments = () => {
    return (
        // <div className='bg-sky-700 h-[621px] md:h-[478px]'>
        <div
            id='department'
            className="relative bg-sky-700 bg-cover bg-center"
            style={{
                backgroundImage: `url('/assets/feature6.jpg')`,
            }}
        >

            {/* Overlay to adjust the opacity of the background image */}
            <div className="absolute inset-0 bg-blue-950 opacity-80"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-start md:justify-around px-4 md:px-8 pt-12 md:pt-16 space-y-6 md:space-y-0 md:space-x-8">

                <div className="text-left">
                    <p className="text-sky-500 font-medium">Best Department!</p>
                    <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
                        Different Types of <br /> Departments
                    </h1>
                </div>


                <div className="text-left md:w-1/2 space-y-4">
                    <p className="text-white">
                        Meddox Are A Medical And Health Department Provider Institutions. Suitable
                        For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                        Any Related Medical Care Field.
                    </p>
                    <button className="px-6 py-3 text-sky-400 bg-white hover:bg-sky-600 transition">
                        View All Departments
                    </button>
                </div>
            </div>

            <div className='relative flex flex-wrap p-4 md:p-0 justify-center md:items-center gap-4 mt-16'>
                {Cards_data.map((item, index) => (
                    <div key={index} className='flex flex-col'>
                        <div className='flex bg-white w-80 p-6'>
                            <div className='mt-6'>
                                {item.icon}
                            </div>

                            <div className='ml-4'>
                                <h1 className='text-blue-900 text-xl font-bold'>{item.title}</h1>
                                <p className='text-sm text-gray-400 my-4'>{item.description}...</p>
                                <p className='text-gray-400 font-bold text-md'>Discover More</p>
                            </div>
                        </div>
                        <div>
                            <Image src={item.image} width={320} height={100} alt='lab' className='h-52' />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Departments