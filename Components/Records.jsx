import { Records_data } from "@/lib/data";
import { MdOutlineGirl } from "react-icons/md";

const Records = () => {
    return (
        <div className='mt-[500px] md:mt-32 flex flex-wrap justify-around items-center p-4'>

            {Records_data.map((items, index) => (
                <div key={index} className='flex'>
                    <div className='mt-4'>
                        {items.icon}
                    </div>
                    <div className='ml-3'>
                        <h1 className='text-blue-900 text-5xl font-bold my-3'>{items.title}</h1>
                        <p className='text-blue-900 font-bold'>{items.desc}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Records