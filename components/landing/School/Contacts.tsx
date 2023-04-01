import React from "react";
import web from "@/public/Contacts/web.svg";
import Location from "@/public/Contacts/location.svg";
import Email from "@/public/Contacts/email.svg";
import calling from "@/public/Contacts/calling.svg";
import Image from "next/image";

interface ContactsProps {
  phone: String;
  email: String;
  website: String;
  location: String;
}
const Contacts = ({ phone, email, website, location }: ContactsProps) => {
  return (
    <div
      className={
        "bg-dark-blue rounded-2xl flex flex-col justify-center gap-2 text-white w-[350px] lg:w-[700px] p-5 m-auto"
      }
    >
      <div className={"flex flex-col lg:flex-row justify-around [&>*]:p-4"}>
        <div className={"font-bold flex flex-row gap-5"}>
          <Image src={calling.src} alt={""} width={30} height={30} />
          <p className={"my-auto"}>{phone}</p>
        </div>
        <div className={"lg:border-x font-bold flex flex-row gap-5"}>
          <Image src={Email.src} alt={""} width={30} height={30} />
          <p className={"my-auto"}>{email}</p>
        </div>
        <div className={"flex flex-row gap-5"}>
          <Image src={web.src} alt={""} width={30} height={30} />
          <a href={website} className={"my-auto"}>
            {website}
          </a>
        </div>
      </div>
      <hr className={"w-[95%] m-auto"} />
      <div
        className={
          "text-center p-4 pb-0 font-bold  flex flex-row gap-5 justify-center"
        }
      >
        <Image src={Location.src} alt={""} width={30} height={30} />
        <p className={"my-auto"}>{location}</p>
      </div>
    </div>
  );
};

export default Contacts;
