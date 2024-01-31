"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Page = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-center overflow-auto overflow-visible mt-[80px] pt-40 lg:pt-10 md:mt-[100px] lg:mt-[160px]">
      <CSSTransition in={inProp} timeout={2000} classNames="fade">
        <div className="grid grid-cols-1 gap-[50px] md:gap-[100px] max-w-[90%] max-h-[100vh]">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              href={project.href}
              img={project.img}
            />
          ))}
          <div className="h-[5px] md:h-[12px]"></div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Page;
