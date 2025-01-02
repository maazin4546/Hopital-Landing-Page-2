"use client"
import { useState, useEffect } from "react";
import { IoMdPlayCircle } from "react-icons/io";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1)); // Loop back to the last slide
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1)); // Loop back to the first slide
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="relative w-full">
            <div className="relative h-96 overflow-hidden md:h-[600px]">

                {/* Carousel Wrapper 1 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentSlide === 0 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Wrapper with the image as a background */}
                    <div
                        className="absolute inset-0 bg-cover opacity-50 bg-center"
                        style={{
                            backgroundImage: `url('/assets/bg1.jpg')`,
                        }}
                    ></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/30 px-8 md:px-32">
                        <h1 className="text-gray-200 text-2xl w-full md:w-[60%] md:text-5xl font-bold mb-4 leading-[40px] md:leading-[60px]">
                            We Take Care of Your Healthy Life
                        </h1>
                        <p className="text-sm md:text-lg text-gray-300 w-full md:w-[45%] mb-6">
                            MedDoctors are a Medical and Health Department provider institution. Suitable for Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health, and any related medical care field.
                        </p>
                        <div className="flex mt-6 space-x-4">
                            <button className="bg-sky-500 text-xs md:text-sm text-white px-6 py-2 hover:bg-blue-700">
                                Let's Start
                            </button>
                            <button className="bg-blue-900 text-white text-xs md:text-sm px-6 py-2 hover:bg-blue-700">
                                Our Department
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel Wrapper 2 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentSlide === 1 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Wrapper with the image as a background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40"
                        style={{
                            backgroundImage: `url('/assets/bg2.jpg')`,
                        }}
                    ></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/30 px-8 md:px-32">
                        <h1 className="text-gray-200 text-2xl w-full md:w-[50%] md:text-5xl font-bold mb-4 leading-[40px] md:leading-[60px]">
                            Best Doctor & Medical Care
                        </h1>
                        <p className="text-sm md:text-lg text-gray-200 w-full md:w-[45%] mb-6">
                            MedDoctors are a Medical and Health Department provider institution. Suitable for Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health, and any related medical care field.
                        </p>
                        <div className="flex mt-6 space-x-4">
                            <button className="bg-sky-500 text-xs md:text-sm text-white px-6 py-2 hover:bg-blue-700">
                                Find A Doctor
                            </button>
                            <button className="bg-blue-900 text-white text-xs md:text-sm px-6 py-2 hover:bg-blue-700">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel Wrapper 3 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentSlide === 2 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Wrapper with the image as a background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/assets/bg3.jpg')`,
                        }}
                    ></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/30 px-8 md:px-32">
                        <h1 className="text-gray-200 text-2xl w-full md:w-[50%] md:text-5xl font-bold mb-4 leading-[40px] md:leading-[60px]">
                            Care Whenever You Need It
                        </h1>
                        <p className="text-sm md:text-lg text-gray-300 w-full md:w-[45%] mb-6">
                            MedDoctors provide a wide range of healthcare services tailored to meet your needs. From general checkups to specialized treatments, we ensure you receive the best care.
                        </p>
                        <div className="flex mt-6 space-x-4">
                            <button className="bg-blue-900 text-white text-xs md:text-sm px-6 py-2 hover:bg-blue-700">
                                More About Us
                            </button>
                            <div className="flex items-center">
                                <IoMdPlayCircle fontSize={50} color="skyBlue" className="cursor-pointer" />
                                <p className="ml-3">Watch Our <br />Video</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index
                            ? "bg-blue-500"
                            : "bg-gray-300"
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={handlePrev}
                className="absolute top-0 left-0 z-30 md:flex hidden items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1L1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                onClick={handleNext}
                className="absolute top-0 right-0 z-30 md:flex hidden items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 9l4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
