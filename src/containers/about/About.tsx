import { FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { SiTypescript } from 'react-icons/si'
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
                        <FaCss3 size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateY-90-translateZ-phl flex justify-center items-center">
                        <FaJsSquare size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateY-90-translateZ-nhl flex justify-center items-center">
                        <FaReact size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateX-90-translateZ-phl flex justify-center items-center">
                        <FaGitAlt size={60} color="#fff" />
                    </div>
                    <div className="absolute w-full h-full border border-white shadow-md shadow-themeMainColor rotateX-n90-translateZ-phl flex justify-center items-center">
                        <SiTypescript size={60} color="#fff" />
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
                        <h1 className="text-5xl m-5 text-themeMainColor">
                        Hi there! 👋 I'm Sonika Kannan a passionate  Front-End Developer
                        </h1>
                        <h3 className="text-3xl font-bold m-5 ">Here's what I bring to the table:</h3>
                        <ul className="list-disc pl-5 text-2xl space-y-3 mx-5">
                            <li><span className=" font-semibold ">HTML & CSS:</span> Crafting clean and semantic code with attention to detail.</li>
                            <li><span className=" font-semibold ">Tailwind CSS:</span> Building sleek and responsive designs with efficiency.</li>
                            <li><span className=" font-semibold ">JavaScript: </span>  Developing dynamic and interactive functionalities.</li>
                            <li><span className=" font-semibold ">React & Next.js:</span> Designing robust and scalable front-end applications.</li>
                            <li><span className=" font-semibold ">Version Control:</span> Experienced in using Git and collaborating on GitHub to streamline workflows and manage codebases effectively.</li>
                        </ul>    
                        <div className="text-2xl my-4">
                            <p>I'm constantly learning and exploring new technologies to stay ahead in this fast-paced industry. Whether it's building a single-page application or implementing cutting-edge features, I am committed to delivering quality work that exceeds expectations.</p>
                        </div>
                        <hr />
                        <div  className="text-2xl my-4">
                            <p>Feel free to connect with me if you're looking for a creative and reliable front-end developer to bring your ideas to life! 😊</p>
                        </div>
                    </div>
                </Animate>

            </div>
        </section>
    );
};

export default About;
