import { useState, useEffect, useContext } from "react";
import axios, { AxiosError } from "axios";
import { Product } from "@/config/types";
import { CartContext, CartContextType } from "@/Context/CartContext";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import ProductsList from "./ProductComponent";
import SliderCarousel from "../Categories/Slider";
import { loaderColor } from "@/data/loader";

interface Props {
    products: Product[]
}

export default function NewProducts() {
    const [productHeadphones, setProductHeadphones] = useState<Product[]>([]);
    const [productMobiles, setProductMobiles] = useState<Product[]>([]);
    const [isloadingProducts, setIsLoadingProducts] = useState(false);
    const { addProductToCart } = useContext(CartContext) as CartContextType;

    useEffect(() => {
        const fetchProductArray = () => {
            setIsLoadingProducts(true);
            axios.get('/products.json')
            .then(res => {
                const products = res.data.products;
                setProductMobiles(prev => {
                    products?.map((prod: any) => {
                        if(prod.category === "668f8af839f662de715bb4f6") {
                            prev.push(prod);
                        }
                    })
                    return prev;
                })
    
                setProductHeadphones(prev => {
                    products?.map((prod: any) => {
                        if(prod.category === "669117c8e34df8c2d9ecf3c4") {
                            prev.push(prod);
                        }
                    })
                    return prev;
                })
            })
            .catch((err: AxiosError) => {
                console.error(err.message);
                toast.error('Something went wrong', { position: "top-center" });
            })
            .finally(() => setIsLoadingProducts(false))
        }
        fetchProductArray();
    }, [])


    return (
        <div className="mb-10 min-h-[500px]">
        {
            isloadingProducts
                ?
            <div className="col-span-4 text-center">
                <ClipLoader
                    size={80}
                    color={loaderColor}
                />
            </div>
                :
            <div className="mt-3">
                <div className="mb-8">
                    <div className="pl-14 mb-2 text-2xl font-medium">
                        Latest Headphones
                    </div>
                    {
                        productHeadphones?.length > 0
                            ?
                        <SliderCarousel
                            products={productHeadphones} 
                            addProductToCart={addProductToCart} 
                        />
                            :
                        <div className="col-span-4 text-center font-semibold text-2xl">
                            No products found
                        </div>
                    }
                </div>
                <div className="my-8">
                    <div className="pl-14 mb-2 text-2xl font-medium">
                        Latest Smartphones
                    </div>
                    {
                        productMobiles?.length > 0
                            ?
                        <SliderCarousel 
                            products={productMobiles} 
                            addProductToCart={addProductToCart} 
                        />
                            :
                        <div className="col-span-4 text-center font-semibold text-2xl">
                            No products found
                        </div>
                    }
                </div>
            </div>
        }
        </div>
    )
}