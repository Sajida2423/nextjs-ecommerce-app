import type { AppProps } from "next/app";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}