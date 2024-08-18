import { useContext } from "react";
import { moneyComaSeperator } from "@/config/functions";
import { Product } from "@/config/types";
import { FaStar } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { CartContext, CartContextType } from "@/Context/CartContext";

interface Props {
    product: Product | null;
}

export default function ProductInfo({product}: Props) {
    const { addProductToCart } = useContext(CartContext) as CartContextType;

    return (
        <>
            <div className="flex mt-3">
                <span className="flex bg-green-700 text-white px-2 py-[1px] w-14 text-sm mr-2 rounded-[4px]">
                    4.3
                    <FaStar 
                        className="w-3 h-3 ml-1 mt-[3px]"
                    />
                </span>
                <span className="text-gray-500 text-xs font-semibold mt-1 mr-1">
                    {moneyComaSeperator(314530)} ratings &
                </span>
                <span className="text-gray-500 text-xs font-semibold mt-1">
                    {moneyComaSeperator(30319)} reviews
                </span>
            </div>

            <div className="flex text-2xl font-semibold mr-8 my-3">
                <span 
                    className="text-gray-500 text-sm italic font-normal line-through mt-[10px] mr-2"
                >
                    ₹{
                        moneyComaSeperator(
                            Math.floor(
                                product?.price! * (100 + product?.discountPercentage!) / 100
                            )
                        )
                    }
                </span>
                <span>
                    ₹{moneyComaSeperator(product?.price!)}
                </span>
                <span className="ml-3 mt-[8px] text-sm font-semibold text-green-700">
                    {`${product?.discountPercentage}%`} off
                </span>
                <span 
                    className={`${product?.amount! > 100 && "hidden"} ml-4 mt-2 px-1 text-red-500 border-red-500 border-[1.2px] text-xs flex items-center justify-center rounded-md font-normal h-5`}
                >
                    {product?.amount} left
                </span>
            </div>

            <p className="mt-4 text-black">
                {product?.description}
            </p>

            <div className="flex flex-col mt-2">
                <button 
                    className="md:hidden border-white border-[1.6px] bg-slate-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-1 hover:bg-slate-500 w-[90%]"
                    onClick={() => addProductToCart(product?._id as string)}
                >
                    <MdShoppingCart 
                        className="w-6 h-6 mr-2"
                    />
                    <span className="uppercase">
                        Add TO CART
                    </span>
                </button>
                <span className="flex items-center font-semibold mt-2">
                    <div className="bg-gray-500 w-2 h-2 rounded-full mr-1"></div>
                    <span className="text-gray-500 text-sm mr-2">
                        Seller -
                    </span>
                    <span className="text-blue-500 text-sm">
                        {product?.seller}
                    </span>
                </span>
                <div className="mt-2">
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">
                        Product details
                    </h2>
                    <div 
                        className="w-[80%] max-md:w-full border-gray-500 border-[1.2px] rounded-md p-5"
                    >
                    {
                        product?.categoryProperties !== undefined
                            &&
                        Object.entries(
                            product?.categoryProperties as Object
                        )
                        .map(([key, value], index) => (
                            <div key={index} className="w-full flex mb-1">
                                <div className="w-2/3 pl-2 py-[2px] text-black">
                                    {key}
                                </div>
                                <div className="flex items-center w-1/3 text-gray-600">
                                    {value}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}