import { Select } from "./Select";
import { CiTrash } from "react-icons/ci";
import { QTY, SIZES } from "../constant";

export function CartItem({ item: { product, qty, size } }) {
    return (
        <div className=" cursor-pointer bg-gray-50 p-2 hover:bg-[#DAFFA2]">
            <div>
                <div className="flex  space-x-2  ">
                    {/* Image */}
                    <img className="h-24" src={product.src} />
                    {/* Title and description */}
                    <div className="space-y-2">
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm text-gray-400">
                            {product.description}
                        </div>
                    </div>
                    {/* price */}
                    <div className="font-bold">{product.price}$</div>
                </div>

                <div className="flex justify-between gap-2 pl-32">
                    {/* Inputs */}
                    <div className="flex space-x-6">
                        {/* QTY input */}
                        <div className="mt-2 space-y-1">
                            <div className="font-bold">QTY</div>
                            <Select defaultValue={qty} title={qty} options={QTY} className={"w-16 p-1 pl-2"} />
                        </div>
                        {/* SIZE input */}
                        <div className="mt-2 space-y-1">
                            <div className="font-bold">SIZE</div>
                            <Select defaultValue={size} title={size} options={SIZES} className={"w-16 p-1 pl-2"} />
                        </div>
                    </div>
                    {/* Trash icon */}
                    <button className="flex-center mt-6">
                        <CiTrash size={25} className="text-black" />
                    </button>
                </div>
            </div>
        </div>
    );
}