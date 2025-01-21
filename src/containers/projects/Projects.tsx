import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import Project1 from "../../assets/project_1.png";
import Project2 from "../../assets/project-2.png";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface ProjectDataItem {
  id: number;
  name: string;
  image: string;
  description: string;
  hasTags: string;
  link: string;
  gitHub: string
}

const projectData: ProjectDataItem[] = [
  {
    id: 1,
    name: "Realtime Chat Application",
    image: Project1,
    hasTags:
      "#React #Express.js #mongoDB #Socket.io",
      description: "Realtime Full Stack Chat Apllication using Reactjs, MongoDB, Express, Node JS & Socket.io, Zustand",
    link: "https://fullstack-chat-application-7bv0.onrender.com",
    gitHub:"https://github.com/sonikakannan/fullstack-chat-application"
  },
  {
    id: 2,
    name: "Online Food Order Website",
    image: Project2,
    description:
      " Build Full Stack Online Food Ordering Website using React JS, MongoDB, Express, Node JS & Strip",
    hasTags: "#Html #Tailwind CSS  #ReactJs #MongoDB #Express #Node JS ",
    link: "https://fullstack-food-delivary-frontend.onrender.com",
    gitHub:"https://github.com/sonikakannan/fullstack-food-delivary"
  },
  {
    id: 3,
    name: "Admin Online Food Order Website",
    image: Project2,
    description:
      " Build Full Stack Online Food Ordering Website using React JS, MongoDB, Express, Node JS & Strip",
    hasTags: "#Html #Tailwind CSS  #ReactJs #MongoDB #Express #Node JS ",
    link: "https://fullstack-food-delivary-frontend.onrender.com",
    gitHub:"https://github.com/sonikakannan/fullstack-food-delivary"
  },
  
];
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  responsive: [
    { breakpoint: 350, settings: { slidesToShow: 1 } },
    {breakpoint : 600,settings :{slidesToShow: 1,}},
     { breakpoint: 800, settings: { slidesToShow: 2 } },
    { breakpoint: 1800, settings: { slidesToShow: 2 } },
  ]
};


const Projects: React.FC = () => {
  return (
    <section className=" relative pb-12">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={30} />}
      />
      {/* <Animate
        play
        duration={0.8}
        delay={0}
        start={{
          transform: "translateY(200px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      > */}
<div className="w-full max-w-screen-lg mx-auto">
<Slider {...settings} className="flex  justify-centr place-items-cente container mt-16 mx-auto items-center gap-20 w-[320px] md:w-[700px] lg:w-[800px] md:mx-auto  sm:mx-11 lg:mx-auto"
>
  {projectData.map((item) => (
    <div
      key={item.id}
      className=" relative min-h-[350px] text-center rounded-tr-5xl  rounded-bl-5xl  shadow-lg  shadow-themeMainColor overflow-hidden group"
    >
      {/* Front face */}

      <div className="absolute inset-0 backface-hidden bg-themeMainColor   perspective-800 rotate-y-0 transition-transform duration-400 group-hover:rotate-y-180">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold m-4 ">{item.name}</h1>
          <p className="text-xl font-medium my-2 tracking-wide">{item.description}</p>
          <p className="text-xl">{item.hasTags}</p>
        </div>
      </div>
      {/* Back face */}
      <div className="absolute inset-0 border border-themeMainColor backface-hidden rounded-tr-5xl rounded-bl-5xl perspective-800 rotate-y-180 transition-transform duration-400 group-hover:rotate-y-0 bg-themeBgColor">
<div className="flex flex-col  h-full">
{/* Image */}
<div className="flex-1 w-full">
<img
src={item.image}
alt={item.name}
className="w-full h-full object-cover"
/>
</div>
{/* Buttons */}
<div className="grid grid-flow-col items-center w-full ">
<a
href={item.link}
target="_blank"
rel="noopener noreferrer"
className="w-full"
>
<button className="border-2 border-themeMainColor w-full h-24 text-themeMainColor text-3xl font-semibold px-4 hover:text-white">
  Visit
</button>
</a>
<a
href={item.gitHub}
target="_blank"
rel="noopener noreferrer"
className="w-full"
>
<FaGithub
  size={60}
  className="bg-themeMainColor w-full py-6 cursor-pointer"
/>
</a>
</div>
</div>
</div>

    </div>
  ))}

{/* </Animate> */}
</Slider>
</div>
    </section>
  );
};

export default Projects;