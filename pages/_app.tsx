import "@/styles/globals.css";
import "@/styles/Login.css";
import "@/styles/Signup.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
