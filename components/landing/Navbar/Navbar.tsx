import * as React from 'react';
import Image from 'next/image';
import {links} from "@/components/landing/Navbar/links";
import Link from "next/link";
import hamburger from "@/public/bars-solid.svg";
import closeIcon from "@/public/close.svg";
import logo from "@/public/School_Logo.svg";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";


interface NavbarProps {
    loggedIn?: boolean;

}

export default function Navbar(props: NavbarProps) {
    let [clicked, setClicked] = useState(false);

    const callBack = () => {
        if (window.screen.width >= 768 && clicked) {
            console.log("false");
            setClicked(false);
        }
    }
    window.addEventListener("resize", callBack)
useEffect(() => {
}, []);

const toggleLinks = (e) => {
    e.stopPropagation();
    setClicked(!clicked);
}

const close = () => setClicked(false);
    const login : String = "login";
    const signUp: String = "Sign Up";
    return (
        <div className={"flex flex-row justify-center w-[100%] h-[100vh]"} onClick={close}>
            <div className={"flex flex-row justify-between fixed w-[95%] mt-4 p-5 bg-white rounded-2xl h-20"}>
                <div className={"w-[25%] flex justify-left"}>
                <Image className={" hidden lg:block bg-dark-blue p-1 rounded-xl"} src={logo.src} alt={"logo"} width={100} height={36} />
                <Image className={"w-[25%] lg:hidden block w-min cursor-pointer"} src={ clicked ? closeIcon.src : hamburger.src} alt={"X"} width={50} height={20} onClick={toggleLinks} />
                </div>
                    <ul className={"lg:flex flex-row justify-center gap-20 hidden lg:w-[50%]"}>
                    {links.map((link, index) => <li className={"link"} key={index}><Link  href={link.route} draggable={"false"} >{link.title}</Link></li>) }
                    </ul>
                {clicked &&
                    <div
                        className={"fixed w-[100%] flex justify-center top-28 left-0"}>
                    <div className={"bg-white p-4 rounded-xl w-[95%] text-center flex flex-col "}>
                        <ul>
                            {links.map((link, index) => <Link  key={index} href={link.route} draggable={"false"}><li className={index == 0 ? "link p-5" : "link p-5 border-t-2"} >{link.title}</li></Link>) }
                        </ul>
                    </div></div>}
                <div className={"flex flex-row justify-end w-max lg:w-[25%]"}>
                    <button className={"btn hover:text-green "}>{login}</button>
                    <button className={"btn outline outline-2 outline-green hover:bg-green hover:text-white-500 hover:text-white"}>{signUp}</button>
                </div>
            </div>
        </div>
    );
}
