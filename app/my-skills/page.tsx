"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { CSSTransition } from "react-transition-group";

const Page = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <CSSTransition in={inProp} timeout={2000} classNames="fade">
          <section className="flex flex-col items-center gap-4">
            <h1 className="mt-[66px] md:pt-0 font-semibold text-[#636e72] text-[30px] md:text-[50px]">
              Skills{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                &{" "}
              </span>
              Technologies
            </h1>
            <p className="text-black text-[20px] md:text-[26px]">
              I focus on all things digital and web related.
            </p>
            <div className="w-[300px] md:w-[500px] text-[20px] md:text-[20px] flex flex-col items-center justify justifu-start leading-relaxed">
              <p>
                <span className="text-[#4b3792] font-bold">
                  Frontend development:
                </span>
                <br />
                HTML5, CSS, JavaScript, TypeScript, React, Angular, TailwindCSS,
                Bootstrap.
              </p>
              <p>
                <span className="text-[#4b3792] font-bold">
                  Backend development:
                </span>
                <br />
                C#, ASP.NET Core MVC, ASP.NET Core Web API, Entity Framework
                Core, MySQL, SQL Server, Docker.
              </p>
            </div>
            {/* <span className="bg-[#4b3792] text-white p-2 rounded-[5px]">
              With a preference for the front.
            </span> */}
          </section>
        </CSSTransition>
        <CSSTransition in={inProp} timeout={2000} classNames="fade">
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            modules={[Autoplay]}
            className="max-w-[80%]"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CSSTransition>
      </div>
    </main>
  );
};

export default Page;
