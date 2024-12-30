import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import Project1 from '../../assets/project_1.svg';
import Project2 from '../../assets/project_2.svg';
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Animate } from "react-simple-animate";
interface ProjectDataItem {
    id: number;
    name: string;
    image: string;
    description: string;
    hasTags: string;
}

const projectData: ProjectDataItem[] = [
    {
        id: 1,
        name: "AI-Kids-Story",
        image: Project1,
        description: "AI-powered kids story generator app using Next.js, React, NextUI, and JavaScript ,Gemini AI, Hugging Face Api and drizzle database!",
        hasTags: "#Html #Tailwind #Js #React "
    },
    {
        id: 2,
        name: "Shopsy",
        image: Project2,
        description: "I created the Shopy eCommerce website using HTML, CSS, JavaScript, Next.js, Tailwind CSS, and NextAuth, featuring secure payment integration.",
        hasTags: "#Html #CSS #NextJs #NextAuth"
    }
];

const Projects: React.FC = () => {

    return (
        <section className=" relative pb-12">
            <PageHeaderContent
                headerText="My Projects"
                icon={<BsInfoCircleFill size={30} />}
            />
           <Animate
           play
           duration={0.8}
           delay={0}
            start={{
                transform: "translateY(200px)",
            }}
            end={{
                transform: "translateY(0px)",
            }}
           >
           <div className="grid md:grid-flow-col justify-centr place-items-cente container mx-auto items-center gap-20 w-[320px] md:w-[700px] lg:w-[800px] md:mx-auto  mt-12 sm:mx-11 lg:mx-auto">
                {projectData.map((item) => (
                        <div key={item.id} className=" relative h-[310px] text-center rounded-tr-5xl  rounded-bl-5xl  shadow-lg  shadow-themeMainColor overflow-hidden group">
                        {/* Front face */}
                        
                        <div className="absolute inset-0 backface-hidden bg-themeMainColor   perspective-800 rotate-y-0 transition-transform duration-400 group-hover:rotate-y-180">
                            <div className="flex flex-col justify-center items-center h-full">
                                <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
                                <p className="text-xl">{item.description}</p>
                            </div>
                        </div>
                        {/* Back face */}
                        <div className="absolute inset-0 border border-themeMainColor backface-hidden rounded-tr-5xl  rounded-bl-5xl  perspective-800 rotate-y-180 transition-transform duration-400 group-hover:rotate-y-0 bg-themeBgColor">
                            <div className="flex flex-col justify-center items-center h-full">
                                <img src={item.image} alt={item.name} className="  rounded-tr-5xl  mx-auto max-h-full max-w-full object-cover" />
                                <div className="mt-4 grid grid-flow-col   items-center w-full h-full">
                                
                                    <button className="   border-2 border-themeMainColor  w-full  hover:text-themeBgColor h-24 text-themeMainColor text-3xl font-semibold px-4  mr-2 hover:bg-themeMainColor ">Visit</button>
                                    <FaGithub size={60} className=" bg-themeMainColor w-full py-6 hover:text-themeMainColor hover:bg-themeBgColor hover:border-themeMainColor hover:border-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           </Animate>
        </section>
    );
};

export default Projects;
