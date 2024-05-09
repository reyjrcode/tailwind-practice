import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";
export function Select({ title, options, className, defaultValue }) {
    return <div className="relative dark:text-black">
        <select defaultValue={defaultValue || ""} className={twMerge(` w-24 appearance-none border border-gray-300 p-4 bg-white ${className}`)}>
            <option value="" disabled hidden>{title}</option>
            {options.map((option) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
        <div className="pointer-events-none inset-y-0 right-0 pr-3 flex items-center justify-center absolute">
            <IoIosArrowDown />
        </div>
    </div>;
}