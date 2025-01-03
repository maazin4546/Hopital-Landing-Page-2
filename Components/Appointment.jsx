"use client"

const Appointment = () => {

    function playVideo() {
        const videoFrame = document.getElementById("video-frame");
        const button = document.querySelector("button");

        // Play the video using the YouTube iframe API
        videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

        // Hide the play button after clicking
        button.style.display = 'none';
    }


    return (
        <div className="mt-16 flex justify-between">
            <div className="max-w-lg mx-auto p-4">
                <form className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-900 text-left mb-4">Make an Appointment</h2>

                    {/* First Row: Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-blue-900">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-blue-900">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* Second Row: Phone and Doctor */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-blue-900">Phone*</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="doctor" className="block text-sm font-medium text-blue-900">Doctor*</label>
                            <select
                                id="doctor"
                                name="doctor"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            >
                                <option value="">Select a Doctor</option>
                                <option value="doctor1">Dr. Smith</option>
                                <option value="doctor2">Dr. Johnson</option>
                                <option value="doctor3">Dr. Lee</option>
                            </select>
                        </div>
                    </div>

                    {/* Department */}
                    <div className="mb-4">
                        <label htmlFor="department" className="block text-sm font-medium text-blue-900">Department*</label>
                        <select
                            id="department"
                            name="department"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="orthopedics">Orthopedics</option>
                        </select>
                    </div>

                    {/* Third Row: Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-blue-900">Select Date*</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Select Time</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="my-4 flex justify-start">
                        <button
                            type="submit"
                            className="w-1/2 py-3 px-2 bg-sky-400 text-white text-sm font-semibold shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Book An Appointment
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex justify-center items-center h-screen">
                <div className="relative w-1/2 max-w-4xl aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-xl">
                    <iframe id="video-frame" className="w-full h-full" src="https://www.youtube.com/embed/TKnufs85hXk?enablejsapi=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-semibold text-lg rounded-lg hover:bg-opacity-70 transition-all duration-300" onClick={playVideo}>
                        Play
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Appointment