import Image from 'next/image'
import { PiNotepadLight } from "react-icons/pi";
import { FaCheckDouble } from "react-icons/fa";

const DocInfo = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen px-4 md:px-8 pt-12 md:pt-16">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* First Div */}
        <div className="flex flex-col relative p-4 md:p-0">
          <Image
            src="/assets/doc.jpg"
            alt="bg"
            height={600}
            width={400}
            className="w-full max-w-sm object-cover"
          />
          <div className="bg-blue-500 w-fit h-fit p-6 absolute top-10 sm:top-8 right-0 sm:-right-20 transform sm:-translate-x-1/2">
            <PiNotepadLight fontSize={50} color="white" />
            <h1 className="text-3xl font-bold my-4 text-white">45</h1>
            <p className="text-lg font-bold text-white">
              Years of <br /> Experience
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div>
          <div className="mt-0 md:mt-12 max-w-md">
            <p className="text-sm text-blue-400 font-bold">
              Welcome to Best Medical & Health Care
            </p>
            <h1 className="text-2xl md:leading-[50px] md:text-4xl text-blue-950 font-bold my-6">
              Get Best & Amazing Experience With Our Professional Doctors
            </h1>
            <p className="text-lg text-blue-900">
              Meddox Are A Medical And Health Department Provider Institutions.
              Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy,
              Health And Any Related Medical Care Field.
            </p>
          </div>

          <div className="flex flex-wrap justify-start mt-8 gap-x-8 gap-y-4 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <FaCheckDouble className="bg-sky-400 p-1 text-white rounded" fontSize={20} />
                <p className="ml-2 text-gray-400">Professional Doctors</p>
              </div>
              <div className="flex items-center">
                <FaCheckDouble className="bg-sky-400 p-1 text-white rounded" fontSize={20} />
                <p className="ml-2 text-gray-400">Online Schedule</p>
              </div>
              <div className="flex items-center">
                <FaCheckDouble className="bg-sky-400 p-1 text-white rounded" fontSize={20} />
                <p className="ml-2 text-gray-400">High Packages</p>
              </div>
              <div className="flex items-center">
                <FaCheckDouble className="bg-sky-400 p-1 text-white rounded" fontSize={20} />
                <p className="ml-2 text-gray-400">And More...</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <FaCheckDouble className="bg-sky-400 p-1 text-white rounded" fontSize={20} />
                <p className="ml-2 text-gray-400">Digital Laboratory</p>
              </div>
              <div className="flex items-center">
                <FaCheckDouble className="bg-sky-400 p-1 text-white rounded" fontSize={20} />
                <p className="ml-2 text-gray-400">Leading Technology</p>
              </div>
              <div className="flex items-center">
                <FaCheckDouble className="bg-sky-400 p-1 text-white rounded" fontSize={20} />
                <p className="ml-2 text-gray-400">24/7 Online Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DocInfo