"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  text: string;
  href: string;
  techImg?: string[];
}

const ProjectCard = ({ image, title, text, href, techImg }: Props) => {
  return (
    <div className="w-[440px] h-[240px] rounded-md cursor-pointer border border-[#4b3792]">
      <div className="flip-card-inner w-full h-full">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            {Array.isArray(techImg) &&
              techImg.map((img, index) => (
                <Image
                  src={img}
                  alt={`tech-${index}`}
                  key={index}
                  width={40}
                  height={40}
                />
              ))}
          </div>
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            <Link
              href={href}
              target="_blank"
              className="rounded-[20px] absolute top-[58%] left-[35%] bg-[#4b3792] hover:bg-purple px-5 py-2 text-center text-white max-w-[300px]"
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
