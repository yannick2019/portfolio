"use client";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Socials } from "@/constants";

export default function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center">
        <div className="flex flex-row m-auto">
          <div className="flex flex-col items-center gap-2 z-[10] max-w-[720px] px-10 pb-56 mt-20 md:pl-20 md:pb-20 md:mt-0 md:items-start">
            <CSSTransition in={inProp} timeout={2000} classNames="slide">
              <h1 className="text-[30px] text-[#636e72] font-semibold md:text-[60px] mt-20">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Frontend Developer
                </span>
              </h1>
            </CSSTransition>
            <CSSTransition in={inProp} timeout={2000} classNames="slide">
              <div>
                <p className="flex flex-col text-black items-center md:block leading-relaxed text-2xl">
                  <span className="text-2xl">Hi 👋 I&apos;m Yannick</span>
                  <br />A passionate web developer having an experience of
                  building web applications. My passion for programming and
                  digital creation encourages me to explore new frontiers in
                  this constantly evolving world.
                </p>
                <p className="mt-2">cleps2012@gmail.com</p>
                <div className="flex flex-row gap-2 mt-1">
                  {Socials.map((social) => (
                    <Link
                      href={social.href}
                      target="_blanck"
                      rel=""
                      key={social.name}
                    >
                      <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={28}
                        height={28}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </CSSTransition>
            <CSSTransition in={inProp} timeout={2000} classNames="slide">
              <div className="hidden flex flex-col gap-4 space-x-4 items-center mt-6 md:flex-row md:block md:mt-6">
                <Link
                  href="/my-skills"
                  className="rounded-[20px] group bg-[#4b3792] relative px-12 py-3 ml-3 md:ml-0 text-lg text-white max-w-[200px] text-center"
                >
                  Skills
                </Link>
                <Link
                  href="/my-projects"
                  className="rounded-[20px] group bg-transparent relative border border-[#4b3792] px-5 py-3 text-lg text-[#4b3792] max-w-[200px] text-center"
                >
                  <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-O group-hover:opacity-20"></div>
                  My projects
                </Link>
                <Link
                  href="/about-me"
                  className="rounded-[20px] group bg-transparent relative border border-[#4b3792] px-5 py-3 text-lg text-[#4b3792] max-w-[200px] text-center"
                >
                  <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-O group-hover:opacity-20"></div>
                  About me
                </Link>
              </div>
            </CSSTransition>
          </div>

          <div className="flex flex-col hidden items-center z-[10] pb-56 mt-24 max-w-[720px] lg:block md:pl-10 md:pb-20 md:mt-26 md:ml-5">
            <Image
              src="/manOnTable.png"
              alt="man on table"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
