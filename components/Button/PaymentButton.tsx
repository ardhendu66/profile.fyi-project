import { ClipLoader } from "react-spinners";

interface Props {
    paymentProcessing: boolean,
    doActionAfterButtonClick: (params: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function PaymentButton({paymentProcessing, doActionAfterButtonClick}: Props) {
    return (
        <button
            type="button"
            className={`flex items-center justify-center bg-blue-600 text-white text-xl w-[70%] max-md:w-full rounded shadow font-semibold mt-3 mb-8 ${paymentProcessing ? "p-2" : "p-3"}`}
            onClick={e => doActionAfterButtonClick(e)}
        >
        {
            paymentProcessing 
                ? 
            <ClipLoader 
                color="white" 
                size={40} 
                speedMultiplier={0.7} 
            /> 
                : 
            "Continue to Payment"
        }
        </button>
    )
}