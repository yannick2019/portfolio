import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[720px]">
          <h1 className="text-[50px] text-white font-semibold sm:text-[50px]">
            Junior
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            <span className="text-2xl">Hi 👋 I&apos;m Yannick</span>
            <br />
            <br /> A passionate junior web developer having an experience of
            building web applications. My passion for programming and digital
            creation encourages me to explore new frontiers in this constantly
            evolving world.
          </p>
          <div className="flex flex-row space-x-4 md:flex-row hidden md:block mt-4">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group bg-transparent relative border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-O group-hover:opacity-20"></div>
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group bg-transparent relative border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-O group-hover:opacity-20"></div>
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="flex absolute bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 tex-lg text-white max-w-[200px]"
        >
          Skills
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
