import Head from 'next/head'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import CartProvider from '@/Context/CartContext'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
        <CartProvider>
          <Head>
            <title>
              Ecomshop
            </title>
          </Head>
          <Component {...pageProps} />
          <ToastContainer />
        </CartProvider>
  )
}