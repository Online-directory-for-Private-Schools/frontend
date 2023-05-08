import "@/styles/globals.css";
import "@/styles/footer.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          background: "linear-gradient(to right, #8a99ba, #FFFFFF)",
        },
      },
    },
    colors: {
      brand: {
        "dark-blue": "#3D3D6B",
      },
      text: {
        "dark-blue": "#3D3D6B",
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
