import { useRouter } from "next/router"
import axios, { AxiosError } from "axios";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Product } from "@/config/types";
import { ClipLoader } from "react-spinners";
import { loaderColor } from "@/data/loader";
import ImageSlider from "@/components/SingleProduct/ImageSlider";
import ProductInfo from "@/components/SingleProduct/ProductInfo";
import { IoIosArrowRoundDown } from "react-icons/io";
import RatingsAndReviews from "@/components/SingleProduct/Rating&Reviews";

export default function SingleProductPage() {
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoadingProduct, setIsLoadingProduct] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const router = useRouter();
    const { id } = router?.query;

    useEffect(() => {
        if(!id) {
            return;
        }

        const fetchProduct = () => {
            // console.log(id[0]);            
            setIsLoadingProduct(true);
            axios.get('/products.json')
            .then(res => {
                const products = res.data.products;
                setProduct(prev => {
                    prev = products.find((p: Product) => p._id === id[0]);
                    console.log(prev);                    
                    return prev;
                })
            })
            .catch((err: AxiosError) => console.error(err.message))
            .finally(() => setIsLoadingProduct(false))
        }
        fetchProduct();
    }, [id])

    return (
        <div className="bg-gray-300 min-h-screen">
            <div className="sticky top-0 z-30">
                <Header />
            </div>
            {
                isLoadingProduct
                    ?
                <div className="text-center mt-5">
                    <ClipLoader
                        size={70}
                        color={loaderColor}
                    />
                </div>
                    :
                <div className="flex flex-col">
                    <div className="flex items-start max-md:flex-col p-10 max-sm:p-4">
                        <ImageSlider
                            product={product}
                            slideIndex={slideIndex}
                            setSlideIndex={setSlideIndex}
                        />
                        <div className="ml-8 max-md:flex max-md:justify-center max-md:flex-col">
                            <div className="text-2xl font-semibold">{product?.name}</div>
                            <ProductInfo product={product} />
                        </div>
                    </div>
                    <div className="p-10 w-[75%] max-md:w-full">
                        <h1 className="flex text-4xl font-bold underline ratings mb-5">
                            Ratings & Reviews
                            <IoIosArrowRoundDown className="mt-1 w-8 h-8" />
                        </h1>
                        <RatingsAndReviews />
                    </div>
                </div>
            }
        </div>
    )
}