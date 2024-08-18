import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import imgSrc from "@/assets/404.png";
import Footer from "../Footer";

export default function CustomError404() {
    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <div className="flex flex-col justify-start items-center w-full min-h-[700px]">
                <div>
                    <Image
                        src={imgSrc}
                        width={450}
                        height={450}
                        alt="error"
                        priority
                        className="rounded-sm"
                    />
                </div>
                <div className="flex flex-col items-center justify-center -mt-2 gap-2">
                    <div className="text-4xl font-bold text-gray-500">
                        Page Not Found
                    </div>
                    <p className="text-sm font-semibold">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                    <Link 
                        href={'/'}
                        className="text-lg text-white px-4 py-2 ml-10 rounded-md bg-blue-700 mt-6 font-semibold"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}