"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  img: string;
  title: string;
  text: string;
  href: string;
}

const ProjectCard = ({ img, title, text, href }: Props) => {
  return (
    <div className="w-[380px] md:w-[720px] h-[240px] md:h-[460px] rounded-md cursor-pointer border border-[#4b3792]">
      <div className="flip-card-inner w-full h-full">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex flex-col items-center z-[20] justify-center">
            <h2 className="text-2xl mb-4">{title}</h2>
            <p className="ml-2 text-center">{text}</p>
          </div>
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            <Link
              href={href}
              target="_blank"
              className="rounded-[20px] absolute top-[60%] left-[40%] bg-[#4b3792] hover:bg-purple px-5 py-2 text-center text-white max-w-[300px]"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
