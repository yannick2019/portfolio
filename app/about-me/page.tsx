import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify justify-center">
        <h1 className="absolute z-[10] top-[100px] left-[50px] text-[50px] md:text-[70px] text-[#4b3792]">
          About me
        </h1>
        <div className="absolute z-[0] w-[250px] md:w-[380px] mb-6">
          <Image
            src={"/hero_2.png"}
            alt="My picture"
            width={380}
            height={380}
          />
        </div>
        <div className="mt-[600px] px-2 md:absolute z-[10] max-w-[500px] text-xl md:max-w-[700px] md:h-[200px] md:bottom-[150px] md:right-[40px] md:text-3xl text-[#7158e2] font-simibold">
          Transitioning from Logistic to web development, I am ready to apply
          and enhance my skills in frontend development. A quick learner with a
          proactive mindset, I bring adaptability and a passion for continuous
          learning, and I would be exciting to contribute to a dynamic team and
          grow.
        </div>
      </div>
    </div>
  );
};

export default Page;
