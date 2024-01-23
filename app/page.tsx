import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="flex flex-row m-auto">
          <div className="flex flex-col items-center gap-5 z-[10] max-w-[720px] px-10 pb-56 mt-24 md:pl-20 md:pb-20 md:mt-0 md:items-start">
            <h1 className="text-[36px] text-white font-semibold md:text-[49px] mt-20">
              Junior
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Web developer
              </span>
            </h1>
            <p className="flex flex-col text-gray-200 items-center md:block">
              <span className="text-2xl">Hi 👋 I&apos;m Yannick</span>
              <br />A passionate junior web developer having an experience of
              building web applications. My passion for programming and digital
              creation encourages me to explore new frontiers in this constantly
              evolving world.
            </p>
            <div className="flex flex-col gap-4 space-x-4 items-center mt-6 md:flex-row md:block md:mt-4">
              <Link
                href="/my-skills"
                className="rounded-[20px] group bg-[#4b3792] relative px-12 py-3 ml-3 text-lg text-white max-w-[200px] text-center"
              >
                Skills
              </Link>
              <Link
                href="/my-projects"
                className="rounded-[20px] group bg-transparent relative border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
              >
                <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-O group-hover:opacity-20"></div>
                My projects
              </Link>
              <Link
                href="/contact-me"
                className="rounded-[20px] group bg-transparent relative border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
              >
                <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-O group-hover:opacity-20"></div>
                Contact me
              </Link>
            </div>
          </div>

          <div className="flex flex-col hidden items-center z-[10] pb-56 mt-24 max-w-[720px] lg:block md:pl-10 md:pb-20 md:mt-0 md:ml-10">
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
