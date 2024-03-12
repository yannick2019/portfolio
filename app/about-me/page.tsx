"use client";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="relative w-screen md:h-[100vh] flex items-center justify-center bg-[#4b3792] overflow-scroll md:overflow-hidden">
      <div className="flex items-center flex-col justify-center p-4 lg:flex-row lg:gap-4">
        <div className="mt-[100px] md:mt-[140px]">
          <CSSTransition in={inProp} timeout={2000} classNames="fade">
            <div className="w-[240px] md:w-[240px] lg:w-[360px] mb-6 md:mb-0 md:mt-[90px] md:flex md:items-center lg:mt-0 lg:mb-[100px]">
              <Image
                src={"/hero_2.png"}
                alt="My picture"
                width={320}
                height={320}
              />
            </div>
          </CSSTransition>
        </div>
        <CSSTransition in={inProp} timeout={2000} classNames="slide-right">
          <div className="max-w-[500px] mb-[80px] text-lg md:max-w-[700px] md:text-xl lg:max-w-[720px] lg:text-2xl lg:mt-[200px] text-white md:flex md:flex-col md:justify-start md:mt-[40px] md:mb-[140px]">
            <h2 className="text-[26px] md:text-[30px]">
              Developer with a Passion for Transformation
            </h2>
            <br />
            Embarking on a transformative journey from logistics to web
            development, fueled by a new found love for development, I am eager
            to immerse myself in the world of web development and continue
            cultivating my skills. My adaptability and unwavering passion for
            continuous learning make me an asset to any project. I am
            particularly excited about the prospect of contributing to a dynamic
            team and actively seeking challenging opportunities that will foster
            both my professional growth and my genuine passion for coding..
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Page;
