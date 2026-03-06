// import type { AppProps } from "next/app";
// import Navbar from "../app/components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { AuthProvider } from "@/app/context/AuthContext";
// import { CartProvider } from "@/app/context/CartContext";
// import Footer from '../app/components/Footer'
// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//     {/* <AuthProvider> */}
//     <CartProvider>
//       <Navbar/>
      
//       <Component {...pageProps} />
//       </CartProvider>
//       {/* </AuthProvider> */}
      
//       <Footer/>
//     </>
//   )
// }

// pages/_app.tsx
import type { AppProps } from "next/app";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../app/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Main page content */}
      <Component {...pageProps} />

      {/* Footer visible on all pages */}
      <Footer />
    </CartProvider>
  );
}