import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "MySql",
    Image: "/mysql.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src: "/icons8-linkedin.png",
    href: "https://www.linkedin.com/in/yannick-yanga-4aa4a6280/",
  },
  {
    name: "Github",
    src: "/icons8-github.png",
    href: "https://github.com/yannick2019",
  },
];

export const Projects = [
  {
    title: "FriendLink",
    text: "Facebook-style web app using React.js, JavaScript, Node js, Express, TailwindCSS, Axios.",
    src: "/friendlink-capture.png",
    href: "https://friendlink-client.vercel.app/",
    techImg: [
      "/react.png",
      "/js.png",
      "/tailwind.png",
      "/node-js.png",
      "/mongodb.png",
    ],
  },
  {
    title: "Restaurant Koniya",
    text: "Full-stack Restaurant website : HTML5, JavaScript and Bootstrap with backend in PHP.",
    src: "/restaurant-capture.jpeg",
    href: "http://koniya-restaurants.infinityfreeapp.com/index.html",
    techImg: ["/html.png", "/js.png", "/bootstrap.jpeg", "/mysql.png"],
  },
  {
    title: "Miner clicker",
    text: "Cookie clicker game using HTML5, CSS, JavaScript.",
    src: "/cookie-clicker-capture.png",
    href: "https://yannick2019.github.io/cookie-clicker/",
    techImg: ["/html.png", "/css.png", "/js.png"],
  },
  {
    title: "Pokedex",
    text: "Web app using React.js, JavaScript, Vite.js and CSS",
    src: "/pokedex-capture.jpeg",
    href: "https://yannick2019.github.io/pokedex",
    techImg: ["/react.png", "/js.png", "/css.png"],
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
