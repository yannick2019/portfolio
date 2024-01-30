"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-center overflow-auto sm:overflow-auto md:overflow-auto lg:overflow-visible pt-40 lg:pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-[90%] max-h-[90vh]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            href={project.href}
            techImg={project.techImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
