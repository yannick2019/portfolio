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
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#4b3792]">
      <div className="flex items-center justify justify-center">
        <CSSTransition in={inProp} timeout={2000} classNames="slide">
          <h1 className="absolute z-[10] top-[100px] left-[50px] text-[50px] md:text-[70px] text-white">
            About me
          </h1>
        </CSSTransition>
        <CSSTransition in={inProp} timeout={2000} classNames="fade">
          <div className="absolute z-[0] w-[250px] md:w-[320px] mb-6">
            <Image
              src={"/hero_2.png"}
              alt="My picture"
              width={320}
              height={320}
            />
          </div>
        </CSSTransition>
        <CSSTransition in={inProp} timeout={2000} classNames="slide-right">
          <div className="mt-[600px] px-2 md:absolute z-[10] max-w-[500px] text-xl md:max-w-[700px] md:h-[200px] md:bottom-[50px] md:right-[40px] md:text-3xl text-white font-bold text-with-stroke">
            Transitioning from Logistic to web development, I am ready to apply
            and enhance my skills in frontend development. A quick learner with
            a proactive mindset, I would be exciting to contribute to a dynamic
            team and grow.
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Page;
