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
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: "translateX(-200px)" }}
                    end={{ transform: "translateX(0px)" }}
                >
                    <div className="w-full sm:w- mb-28 pl-6 mt-12 ">
                        <h1 className="text-5xl m-5 text-themeMainColor">
                            Hello there! I am a front-end developer.
                        </h1>
                        <ul className="list-disc pl-5 text-2xl space-y-3 mx-5">
                            <li><span className=" font-semibold ">Languages & Tools:</span> Proficient in HTML5, CSS3, JavaScript (ES6+), and TypeScript.</li>
                            <li><span className=" font-semibold ">Frameworks & Libraries:</span> Extensive experience with React, Angular, Vue.js, and Svelte.</li>
                            <li><span className=" font-semibold ">Styling:</span> Skilled in using CSS preprocessors like SASS and LESS, and frameworks like Tailwind CSS and Bootstrap.</li>
                            <li><span className=" font-semibold ">Version Control:</span> Adept at using Git and GitHub for version control and collaborative development.</li>
                            <li><span className=" font-semibold ">Build Tools:</span> Familiar with modern build tools and task runners like Webpack, Gulp, and npm scripts.</li>
                            <li><span className=" font-semibold ">Testing:</span> Knowledgeable in unit testing and end-to-end testing using Jest, Mocha, and Cypress.</li>
                        </ul>    
                    </div>
                </Animate>
                <div className="relative w-[--l] h-[--l] animate-spincube preserve-3d transform-origin-cube">
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
            </div>
        </section>
    );
};

export default About;
