"use client";
import React from "react";
import Link from "next/link";
import Sidebar from "./sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div
      style={{ background: "#4b3792" }}
      className="fixed top-0 z-[40] w-full h-[80px] flex justify-between items-center px-10 md:px-20"
    >
      <Sidebar />
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white text-[25px] font-semibold hidden md:block">
          <Link href="/">Yannick Yanga</Link>
        </h1>
      </div>

      <div className="hidden flex flex-col gap-4 md:block md:flex-row">
        <div className="text-white flex flex-col items-center gap-4 md:flex-row md:gap-7">
          <Link href={"/"}>Home</Link>
          <Link href={"/my-skills"}>Skills</Link>
          <Link href={"/my-projects"}>Projects</Link>
          <Link href={"/about-me"}>About</Link>
          <Link
            href={"/pdf/test.pdf"}
            className="text-white border border-white rounded-[20px] px-4 py-1"
          >
            My CV
          </Link>
        </div>
      </div>
    </div>
  );
};
