import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
  <Component {...pageProps} />
    <ToastContainer />
    </>
  )

}
