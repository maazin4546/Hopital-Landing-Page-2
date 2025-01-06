import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { News_data } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


const News = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-start md:justify-around p-4 px-4 md:px-8 pt-12 md:pt-16 space-y-6 md:space-y-0 md:space-x-8">
                <div className="text-left">
                    <p className="text-sky-500 font-medium">Recent News</p>
                    <h1 className="text-blue-900 text-3xl md:text-4xl font-bold mt-2">
                        Read All News
                    </h1>
                </div>

                <div className="text-left md:w-1/2 space-y-4">
                    <p className="text-gray-500">
                        Meddox Are A Medical And Health Department Provider Institutions. Suitable
                        For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                        Any Related Medical Care Field.
                    </p>
                    <button className="px-6 py-3 text-white bg-sky-400 hover:bg-sky-600 transition">
                        View All Blog
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-start min-h-screen mt-16">
                <Carousel className="flex flex-wrap justify-center gap-4 w-full">
                    <CarouselContent className="w-full">
                        {News_data.map((items, index) => {
                            const { imgUrl, title, desc, tag1, tag2 } = items;

                            return (
                                <CarouselItem
                                    key={index}
                                    className="basis-full sm:basis-1/2 lg:basis-1/3 p-4"
                                >
                                    <div className="relative">
                                        <Image
                                            src={imgUrl}
                                            width={300}
                                            height={300}
                                            alt="Feature"
                                            className="w-full h-56 object-cover rounded-lg"
                                        />

                                        <div className="flex absolute left-4 px-6 bottom-4 bg-white rounded-lg p-2 w-fit">
                                            <p className="cursor-pointer text-sky-500 text-xs hover:text-black">
                                                {tag1},&nbsp;
                                            </p>
                                            <p className="cursor-pointer text-sky-500 text-xs hover:text-black">
                                                {tag2}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-4">
                                        <div className="flex gap-4">
                                            <p className="text-sky-500 text-xs">July 22, 2022</p>
                                            <p className="text-black text-xs">No Comments</p>
                                        </div>

                                        <div className="my-4">
                                            <h1 className="text-blue-900 text-xl sm:text-2xl font-bold">
                                                {title}
                                            </h1>
                                            <p className="text-sm text-gray-500 mt-4">{desc}...</p>
                                        </div>

                                        <div>
                                            <Link
                                                href="/"
                                                className="font-bold text-gray-500 hover:text-sky-500 flex items-center transition-all duration-300 group"
                                            >
                                                Discover More
                                                <span className="ml-2 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                                                    →
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default News