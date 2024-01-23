"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Transition from "./Transition";

export const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timout);
    }
  }, [isRouting, path]);

  return (
    <div className="absolute z-[50] left-1/2 transform -translate-x-1/2 -bottom-20 w-[50%] max-h-[150px] rounded-full flex justify-between items-center bg-[#4b3792] px-4 py-7 md:w-[20%] md:w-[20%]">
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-600" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};
