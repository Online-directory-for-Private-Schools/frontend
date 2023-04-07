import Head from "next/head";
import Footer from "@/components/landing/Footer/Footer";
import Hero from "@/components/landing/Hero/Hero";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar loggedIn />
      <Hero />
      <Footer />
    </>
  );
}
