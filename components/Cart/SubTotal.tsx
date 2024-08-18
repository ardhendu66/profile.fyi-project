import { moneyComaSeperator } from "@/config/functions"

interface SubTotalProps {
    subTotalPrice: number
}

export default function SubTotalComponent({subTotalPrice}: SubTotalProps) {
    return (
        <div className="text-xl text-end border-black border-t-[1.5px] pt-2">
            <span className="font-medium mr-2">
                Subtotal:
            </span>
            <span className="text-sky-900 font-semibold tracking-tighter">
                ₹{moneyComaSeperator(subTotalPrice)}
            </span>
        </div>
    )
}