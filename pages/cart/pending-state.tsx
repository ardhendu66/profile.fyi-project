import Header from "@/components/Header";
import { MoonLoader, FadeLoader } from "react-spinners";
import { loaderColor } from "@/data/loader";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PaymentPending() {
    const [paymentVerified, setPaymentVerified] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => setPaymentVerified(false), 6000);
    }, [])

    useEffect(() => {
        if(!paymentVerified) {
            router.push("/cart/success-state");
        }
    }, [paymentVerified])

    return (
        <div>
            <div className="sticky top-0 z-10">
                <Header />
            </div>
            <div className="h-[700px] flex flex-col items-center pt-12 gap-y-8">
                <MoonLoader
                    color={loaderColor}
                    size={150}
                    speedMultiplier={0.6}
                />
                <div className="flex gap-x-5 items-end justify-center ml-5">
                    <span className="text-2xl mb-1">Payment verifying</span>
                    <FadeLoader 
                        color={loaderColor}
                    />
                </div>
                <p>
                    Please don't close this window or reload this page while your payment is being verified...
                </p>
            </div>
            <Footer />
        </div>
    )
}