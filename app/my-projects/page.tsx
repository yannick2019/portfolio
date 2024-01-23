"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
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
