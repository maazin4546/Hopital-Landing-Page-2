import { TbDental } from "react-icons/tb";
import { FaEye, FaBoxes } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";
import { LuNotepadText } from "react-icons/lu";
import { FaRegSquarePlus, FaPerson } from "react-icons/fa6";


export const Cards_data = [
  {
    title: 'Dental Care',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores rem alias cumque. Quod tempore voluptatibus rerum...',
    image: '/assets/lab1.jpg',
    icon: <TbDental fontSize={40} color='darkBlue' />,
  },
  {
    title: 'Eye Care',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores rem alias cumque. Quod tempore voluptatibus rerum...',
    image: '/assets/lab2.jpg',
    icon: <FaEye fontSize={40} color='darkBlue' />,
  },
  {
    title: 'Skin Care',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores rem alias cumque. Quod tempore voluptatibus rerum...',
    image: '/assets/lab3.jpg',
    icon: <BiSolidInjection fontSize={40} color='darkBlue' />,
  },
];


export const Quality_data = [
  {
    title: "Experience Doctors",
    desc: "Doctors' experiences and their perception of the most stressful aspects.",
    icon: <FaPerson fontSize={40} color="black" />,
  },
  {
    title: "+45 Years Experience",
    desc: "The eyes cannot see, what the mind doesn't know.",
    icon: <LuNotepadText fontSize={40} color="black" />,
  },
  {
    title: "Standards Of Treatments",
    desc: "The standard of treatment is a rule of customary law.",
    icon: <FaRegSquarePlus fontSize={40} color="black" />,
  },
  {
    title: "The Best Department",
    desc: "Powerful application of information technology in health.",
    icon: <FaBoxes fontSize={40} color="black" />,
  },
]