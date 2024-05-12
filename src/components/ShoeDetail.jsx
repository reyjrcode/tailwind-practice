import nike1 from "../assets/n1-min.png"
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";


export function ShoeDetail({ shoe }) {
    return (
        <div className=" flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
            <div className="flex-1 lg:-mt-32 lg:ml-28">
                <div className="  flex items-center justify-center h-full bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6] from-5% via-40%">
                    <img src={shoe.src} alt="walay image" className="animate-float" />
                </div>
            </div>
            <div className="flex-1 space-y-6">
                <div className="text-5xl font-black md:text-9xl">
                    {shoe.title}
                </div>
                <div className="font-medium md:text-xl">
                    {shoe.description}
                </div>
                <div className="flex space-x-6">
                    <div className="text-3xl font-extrabold md:text-6xl">
                        {shoe.price} $
                    </div>
                    <Select title={"QTY"} options={QTY} />
                    <Select title={"SIZE"} options={SIZES} />
                </div>

                <div className="space-x-4">
                    <button className="dark:bg-white dark:text-black btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">Add to bag</button>
                    <a href="#" className="text-lg font-bold underline underline-offset-4">
                        View details
                    </a>
                </div>
            </div>

        </div>
    );
}