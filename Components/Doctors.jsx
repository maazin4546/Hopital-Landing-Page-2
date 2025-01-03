import Image from 'next/image'

const Doctors = () => {
    return (
        <div className='mt-16px'>
            <div className="flex flex-col md:flex-row justify-start md:justify-around px-4 md:px-8 pt-12 md:pt-16 space-y-6 md:space-y-0 md:space-x-8">
                {/* First Div */}
                <div className="text-left">
                    <p className="text-sky-500 font-medium">Meet Our Team</p>
                    <h1 className="text-blue-900 text-3xl md:text-4xl font-bold mt-2">
                        Group of Certified &<br /> Experienced Doctors
                    </h1>
                </div>

                {/* Second Div */}
                <div className="text-left md:w-1/2 space-y-4">
                    <p className="text-gray-800">
                        Meddox Are A Medical And Health Department Provider Institutions. Suitable
                        For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                        Any Related Medical Care Field.
                    </p>
                    <button className="px-6 py-3 text-white bg-sky-400 hover:bg-sky-600 transition">
                        View All Departments
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-3 mt-8'>
                <div className="flex flex-col justify-center items-center">
                    <div className="overflow-hidden">
                        <Image
                            src="/assets/doc1.jpg"
                            width={300}
                            height={280}
                            alt="doc"
                            className="transform transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <h1 className="text-blue-900 text-lg my-3 font-bold">Dr Anwar Ramadan</h1>
                    <p className="text-sm text-sky-500">Surgeon, Proctologist</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="overflow-hidden">
                        <Image src={'/assets/doc2.jpg'} width={300} height={280} alt='doc'
                            className="transform transition-transform duration-300 hover:scale-110"
                        />
                        <h1 className="text-blue-900 text-center text-lg my-3 font-bold">Dr Anwar Ramadan</h1>
                        <p className='text-sm text-center text-sky-500'>Surgeon, Proctologist</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="overflow-hidden">
                        <Image src={'/assets/doc3.jpg'} width={300} height={280} alt='doc'
                            className="transform transition-transform duration-300 hover:scale-110"
                        />
                        <h1 className='text-blue-900 text-center text-lg my-3 font-bold'>Dr Anwar Ramadan</h1>
                        <p className='text-sm text-sky-500 text-center'>Surgeon, Proctologist</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Doctors