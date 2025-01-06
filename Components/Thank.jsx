import Image from 'next/image'
import { RiDoubleQuotesL } from "react-icons/ri";

const Thank = () => {
    return (
        <div className="p-2 md:p-0 mt-16 flex flex-col relative">
            {/* Image Section */}
            <div className="absolute md:top-14 md:left-[10%] z-10 flex justify-start items-start">
                <Image
                    src="/assets/thank.jpg"
                    width={450}
                    height={400}
                    alt="thank"
                />
            </div>

            {/* Content Section */}
            <div
                className="relative bg-blue-900 bg-opacity-95 md:w-[80%] md:ml-[20%] shadow-lg"
                style={{
                    backgroundImage: "url('https://media.istockphoto.com/id/184312691/photo/doctor-and-senior-patient-talking-in-hospital-room.jpg?s=612x612&w=0&k=20&c=ON0IPi-7i54z67g9YPZurbxnOfUcmZIaKMtb0gzsRRI=')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900 bg-opacity-80 rounded-lg"></div>

                {/* Content */}
                <div className="relative flex flex-col justify-center items-start p-8 pt-80 md:pt-12 md:pl-96 md:py-28 md:pr-16">
                    <RiDoubleQuotesL fontSize={50} color="white" />
                    <h1 className="text-lg md:text-2xl text-white font-bold my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim aut dolore blanditiis fuga beatae incidunt sit ad a earum, minima officia! Expedita, explicabo.
                    </h1>
                    <h1 className="text-lg md:text-xl text-white font-bold">Anwar Husain</h1>
                    <p className='text-white mt-6'>Cardiology</p>
                </div>
            </div>

        </div>

    )
}

export default Thank