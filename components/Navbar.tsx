import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div
      style={{ background: "url(/main-bg.webp)" }}
      className="fixed top-0 z-[40] w-full h-[80px] flex justify-between items-center px-10 md:px-20"
    >
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/yannick.png"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold hidden sm:block">
          Yannick
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Yanga{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2 items-center">
        {Socials.map((social) => (
          <Link href={social.href} target="_blanck" rel="" key={social.name}>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
        <div>
          <button className="text-white border border-white rounded-[20px] px-4 py-1">
            My CV
          </button>
        </div>
      </div>
    </div>
  );
};
