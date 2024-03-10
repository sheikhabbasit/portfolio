import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import TerraPraxis from "./assets/TerraPraxis.jpg";
import Portfolio from "./assets/Portfolio.jpg";
import Currinda from "./assets/Currinda.jpg";
import DMVentures from "./assets/DMVentures.jpg";
import CuriousTitans from "./assets/CuriousTitans.jpg";
import GetUnitronic from "./assets/GetUnitronic.jpg";

export const navLinks = ["home", "about", "skills", "portfolio"];

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Sheikh Abdul Basit",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+91-7006243583",
  },
  {
    id: 3,
    icon: <FaMailBulk />,
    key: "Email",
    value: "sheikh.abdul.basit95@gmail.com",
  },
];

export const icons = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <DiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <TbBrandNextjs />, name: "NextJS" },
  { icon: <SiMui />, name: "MUI" },
  { icon: <FaGithub />, name: "Github" },
];

export const experiences = [
  {
    id: 1,
    year: "Nov 2021 - Oct 2023",
    position: "Jr. Software Engineer",
    company: "Nickelfox Technologies",
  },
  {
    id: 2,
    year: "Oct 2023 - Present",
    position: "SDE 2",
    company: "Nickelfox Technologies",
  },
];
export const finishes = [
  {
    id: 1,
    number: "2+ ",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: " 5",
    itemName: "Projects Done",
  },
];

export const workImages = [
  {
    id: 1,
    img: Currinda,
    name: "Currinda",
    link: "https://nickelfox.currinda2.com/",
  },
  {
    id: 2,
    img: DMVentures,
    name: "DMVentures",
    category: "",
    link: "https://stage.dmventures.foxlabs.in/marketing/dashboard/",
  },
  {
    id: 3,
    img: TerraPraxis,
    name: "TerraPraxis",
    link: "https://terrapraxisrepower.com/",
  },
  {
    id: 4,
    img: CuriousTitans,
    name: "Curious Titans",
    link: "https://dev.curioustitans.foxlabs.in/",
  },
  {
    id: 5,
    img: GetUnitronic,
    name: "GetUnitronic",
    link: "https://admin-dev.getunitronic.com/",
  },
  {
    id: 6,
    img: Portfolio,
    name: "Personal Portfolio",
    link: "",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "16 Road, TharKayTa , Yangon",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "abee02@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+959-883-271-929",
  },
];
