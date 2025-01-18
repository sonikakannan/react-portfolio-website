import {  FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { SiExpress, SiMongodb } from 'react-icons/si'
import { Animate } from "react-simple-animate";

const About = () => {
    return (
        <section className=" relative  text-gray-100 py-10  ">
            <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={30} />} />
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center place-items-center items-center ">
            <div className="relative w-[--l] h-[--l] animate-spincube preserve-3d transform-origin-cube my-28 md:my-3 md:order-2">
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor translate-z-phl flex justify-center items-center">
                        <FaHtml5 size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor translate-z-nhl flex justify-center items-center">
                        <SiExpress size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateY-90-translateZ-phl flex justify-center items-center">
                        <SiMongodb size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateY-90-translateZ-nhl flex justify-center items-center">
                        <FaReact size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateX-90-translateZ-phl flex justify-center items-center">
                        <FaGitAlt size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateX-n90-translateZ-phl flex justify-center items-center">
                        <FaNodeJs size={60} color="#fff" />
                    </div>
                </div>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: "translateX(-200px)" }}
                    end={{ transform: "translateX(0px)" }}
                >
                    <div className="w-full sm:w- mb-28 pl-6 mt-12 ">
                    <h1 className="text-5xl m-5 text-themeMainColor leading-normal">
  Hi there! 👋 I'm Sonika Kannan, a passionate MERN Stack Developer
</h1>
<h3 className="text-3xl font-bold m-5">Here's what I bring to the table:</h3>
<ul className="list-disc pl-5 text-2xl space-y-3 mx-5">
  <li>
    <span className="font-semibold">MongoDB:</span> Building and managing scalable databases for data-driven applications.
  </li>
  <li>
    <span className="font-semibold">Express.js:</span> Creating robust back-end services and RESTful APIs.
  </li>
  <li>
    <span className="font-semibold">React:</span> Designing dynamic, responsive, and user-friendly front-end interfaces.
  </li>
  <li>
    <span className="font-semibold">Node.js:</span> Developing efficient server-side logic and handling complex workflows.
  </li>
  <li>
    <span className="font-semibold">Socket.io:</span> Implementing real-time, bidirectional communication for interactive applications.
  </li>
  <li>
    <span className="font-semibold">Version Control:</span> Skilled in Git and GitHub for effective collaboration and code management.
  </li>
</ul>
<div className="text-2xl my-4">
  <p>
    I'm continuously exploring new tools and technologies to stay at the forefront of the ever-evolving tech landscape. Whether it's creating full-stack applications, integrating real-time features, or implementing innovative solutions, I strive to deliver high-quality work that exceeds expectations.
  </p>
</div>
<hr />
<div className="text-2xl my-4">
  <p>
    Feel free to connect with me if you're looking for a creative and reliable MERN stack developer to bring your vision to life! 😊
  </p>
</div>

                    </div>
                </Animate>

            </div>
        </section>
    );
};

export default About;
