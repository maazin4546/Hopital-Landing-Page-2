import { FaHelicopter } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { LuNotepadText } from "react-icons/lu";

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center px-4 md:px-8 bg-white">

            {/* Card 1 */}
            <div className="bg-blue-950 flex flex-col md:flex-row items-start md:items-center md:w-1/3 px-6 py-6 shadow-lg">
                <div className="pt-2">
                    <FaHelicopter fontSize={30} color="white" />
                </div>
                <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
                    <h1 className="text-white text-lg font-bold">Emergency Helicopter</h1>
                    <p className="text-gray-300 text-sm my-4">
                        Air medical services is a comprehensive term covering the use of air transportation, airplane, or helicopter.
                    </p>
                    <div className="flex items-center">
                        <MdLocalPhone fontSize={24} color="white" className="border-2 border-white p-1 rounded-full" />
                        <h1 className="text-white text-lg ml-4">008600 9830</h1>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-900 flex flex-col md:flex-row items-start md:items-center md:w-1/3 px-6 py-6 shadow-lg">
                <div className="pt-2">
                    <RiCalendarScheduleFill fontSize={30} color="white" />
                </div>
                <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
                    <h1 className="text-white text-lg font-bold">Request Appointment</h1>
                    <p className="text-gray-300 text-sm my-4">
                        You may complete the form below to request an appointment at our clinic.
                    </p>
                    <button className="bg-transparent border border-white px-4 py-2 rounded text-white text-sm font-bold hover:bg-white hover:text-blue-900 transition">
                        Make Appointment
                    </button>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-sky-600 flex flex-col md:flex-row items-start md:items-center md:w-1/3 px-6 py-6 shadow-lg">
                <div className="pt-2">
                    <LuNotepadText fontSize={30} color="white" />
                </div>
                <div className="flex flex-col ml-0 md:ml-4 mt-4 md:mt-0">
                    <h1 className="text-white text-lg font-bold">Doctor Timetable</h1>
                    <p className="text-gray-300 text-sm my-4">
                        Please view our timetable and contact us or book online to make an appointment with your preferred doctor.
                    </p>
                    <button className="bg-transparent border border-white px-4 py-2 rounded text-white text-sm font-bold hover:bg-white hover:text-sky-600 transition">
                        Discover Timetable
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Services