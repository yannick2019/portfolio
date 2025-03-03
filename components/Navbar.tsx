"use client";
import React from "react";
import Link from "next/link";
import Sidebar from "./sidebar/Sidebar";
import Transition from "./Transition";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div
      style={{ background: "#4b3792" }}
      className="fixed top-0 z-[40] w-full h-[100px] flex justify-between items-center px-10 md:px-20"
    >
      <div className="md:hidden lg:hidden">
        <Sidebar />
      </div>

      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white text-[25px] font-semibold hidden md:block">
          <Link href="/">Yannick Yanga</Link>
        </h1>
      </div>

      <div className="hidden flex flex-col gap-4 md:block md:flex-row">
        <div className="text-white flex flex-col items-center gap-4 md:flex-row md:gap-7">
          {isRouting && <Transition />}
          <Link href={"/"}>Home</Link>
          <Link href={"/my-skills"}>Skills</Link>
          <Link href={"/my-projects"}>Projects</Link>
          <Link href={"/about-me"}>About</Link>
          <Link
            href={"/pdf/CV_Yannick_Yanga.pdf"}
            className="text-white border border-white rounded-[20px] px-4 py-1"
          >
            My CV
          </Link>
        </div>
      </div>
    </div>
  );
};
