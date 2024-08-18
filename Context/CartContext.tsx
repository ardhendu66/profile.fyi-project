import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { checkFrequency } from "@/config/functions";
import { toast } from "react-toastify";

export interface CartContextType {
    cartProducts: string[],
    setCartProducts: Dispatch<SetStateAction<string[]>>,
    addProductToCart: (params: string) => void,
    removeProductFromCart: (params: string) => void,
    removeCertainProduct: (params: string) => void,
    clearCartProducts: () => void,
    showAddToCartAnimation: boolean,
    setShowAddToCartAnimation: Dispatch<SetStateAction<boolean>>,
}

export const CartContext = createContext<CartContextType | Object>({})

export default function CartProvider({children}: any) {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProducts, setCartProducts] = useState<string[]>([]);
    const [clearCart, setClearCart] = useState(false);
    const [showAddToCartAnimation, setShowAddToCartAnimation] = useState(false);

    useEffect(() => {
        if (cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    useEffect(() => {
        if(clearCart === true) {
            ls?.setItem('cart', JSON.stringify([]))
        }
    }, [clearCart])

    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')!));
        }
    }, []);

    const addProductToCart = (productId: string) => {
        setShowAddToCartAnimation(true);
        setCartProducts(prev => [...prev, productId as string]);
        setTimeout(() => {
            setShowAddToCartAnimation(false);
        }, 1000)
    }

    const removeProductFromCart = (productId: string) => {
        setCartProducts(prev => {
            if(checkFrequency(prev) && prev.length === 1) {
                setClearCart(true);
            }
            const pos = prev.indexOf(productId);
            if(pos === -1) {
                return prev;
            }
            return prev.filter((value, index) => index !== pos);
        })
    }

    const clearCartProducts = () => {
        setClearCart(true);
        setCartProducts([]);
    }

    const removeCertainProduct = (productId: string) => {
        setCartProducts(prev => {
            if(checkFrequency(prev)) {
                setClearCart(true);
            }
            const array: string[] = [];
            for(let i = 0; i < prev.length; i++) {
                if(prev[i] !== productId) {
                    array.push(prev[i]);
                }
            }
            return array;           
        })
    }
    

    return (
        <CartContext.Provider value={{
            cartProducts,
            setCartProducts,
            addProductToCart,
            removeProductFromCart,
            removeCertainProduct,
            clearCartProducts,
            showAddToCartAnimation,
            setShowAddToCartAnimation
        }}>
            {children}
        </CartContext.Provider>
    )
}