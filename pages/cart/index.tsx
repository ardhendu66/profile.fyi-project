import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import Cartproducts from "@/components/Cart/Cartproducts";
import Emptycart from "@/components/Cart/Emptycart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentButton from "@/components/Button/PaymentButton";
import SubTotalComponent from "@/components/Cart/SubTotal";
import { Product } from "@/config/types";
import { CartContext, CartContextType } from "@/Context/CartContext";
import { toast } from "react-toastify";

export default function Cart() {
    const { cartProducts, clearCartProducts } = useContext(CartContext) as CartContextType;
    const [products, setProducts] = useState<Product[]>([]);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const router = useRouter();
     
    useEffect(() => {
        document.title = 'Cart';
    }, [])
    
    useEffect(() => {
        const fetchProducts = () => {
            axios.get('/products.json')
            .then(res => {   
                setProducts(prev => {
                    prev = res.data.products.filter(
                        (p: Product) => cartProducts.includes(p._id)
                    );
                    console.log(prev);
                    return prev;
                })
            })
            .catch((err: AxiosError) => {
                console.error(err.message);
                toast.error(err.message, { position: "top-center" });
            })
        }
        fetchProducts();
    }, [cartProducts])

    const handleOnPaymentProcessing = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPaymentProcessing(true);
        setTimeout(() => router.push('/cart/pending-state'), 3000);
    }

    var subTotalPrice = 0;
    for(const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        subTotalPrice += price;
    }
    
    if(!cartProducts.length) {
        return (
            <main className="w-screen min-h-screen bg-gray-300">
                <div className="sticky top-0 z-10">
                    <Header />
                </div>
                <div className="flex items-start justify-center h-[460px]">
                    <Emptycart />
                </div>
                <Footer/>
            </main>
        )
    }

    return(
        <div>
            <div className="sticky top-0 z-10">
                <Header />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 my-4">
                <div className="flex items-center justify-center w-[70%] max-md:w-full">
                    <div className="p-4 bg-white w-full shadow-sm">
                        <div className="w-full p-8 pt-2">
                            <h2 
                                className="flex justify-between text-5xl text-left font-semibold mb-10 tracking-tighter"
                            >
                                My Shopping Cart
                                <button
                                    className="text-red-600 text-xl font-semibold border-red-600 border-[1.5px] px-5 p-2 rounded-md shadow-sm tracking-wide"
                                    onClick={() => clearCartProducts()}
                                >
                                    Clear cart
                                </button>
                            </h2>

                            <Cartproducts 
                                products={products} 
                            />
                            
                            <SubTotalComponent subTotalPrice={subTotalPrice} />
                        </div>
                    </div>
                </div>

                <PaymentButton 
                    paymentProcessing={paymentProcessing}
                    doActionAfterButtonClick={handleOnPaymentProcessing}
                />
            </div>
            <Footer />
        </div>
    )
}