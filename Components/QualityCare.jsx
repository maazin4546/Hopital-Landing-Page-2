import { Quality_data } from "@/lib/data";

const QualityCare = () => {
    return (
        <div className='bg-sky-500 mt-12'>
            <div className="flex flex-col md:flex-row justify-start md:justify-around px-4 md:px-8 pt-12 md:pt-16 space-y-6 md:space-y-0 md:space-x-8">
                {/* First Div */}
                <div className="text-left">
                    <p className="text-white font-medium">Medical Quality Care</p>
                    <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
                        Complete Health Care<br />  Solutions For Everyone
                    </h1>
                </div>

                {/* Second Div */}
                <div className="text-left md:w-1/2 space-y-4">
                    <p className="text-white">
                        Meddox Are A Medical And Health Department Provider Institutions. Suitable
                        For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                        Any Related Medical Care Field.
                    </p>
                    <button className="px-6 py-3 text-sky-400 bg-white hover:bg-sky-600 transition">
                        Book An Appointment
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                {Quality_data.map((item, index) => (
                    <div key={index} className='bg-white flex w-64 p-4 h-40'>
                        <div className='mt-4'>
                            {item.icon}
                        </div>
                        <div className='ml-3'>
                            <h1 className='text-blue-900 text-xl font-bold'>{item.title}</h1>
                            <p className='text-sm text-gray-800 my-4'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QualityCare;