import {  FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { SiExpress, SiMongodb } from 'react-icons/si'
import { Animate } from "react-simple-animate";

const About = () => {
    return (
        <section className=" relative  text-gray-100 py-10  ">
            <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={30} />} />
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  place-items-center ">
            <div className="relative w-[--l] h-[--l] animate-spincube preserve-3d transform-origin-cube lg:mt-0 my-28 lg:my-0  lg:order-2">
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
                    <div className="w-full mb-28 px-6 mt-12 ">
                    <h1 className="text-5xl my-5 text-themeMainColor leading-normal">
  Hi there! 👋 I'm Sonika Kannan
</h1>
<p className="text-2xl">I’m a passionate MERN Stack Developer 🌟 with skills in MongoDB, Express.js, React.js, and Node.js. As a fresher, I love building responsive websites 🖥️ that are both user-friendly and efficient.

I enjoy solving problems 🧩, learning new technologies 📚, and staying up-to-date with the latest trends in web development. Whether it’s creating dynamic front-ends ⚛️ or secure back-ends 🔒, I’m always excited to take on new challenges!</p>
<h3 className="text-3xl font-bold m-5 text-themeMainColor">Here What I Do:</h3>
<ul className="list-disc pl-5 text-3xl space-y-3 mx-5">
  <li>
  Build full-stack web apps using the MERN stack 🚀.  </li>
  <li>
  Create responsive designs with Tailwind CSS 🌈.  </li>
  <li>
  Implement real-time communication with Socket.IO 🔗.
  </li>
  <li>
  Manage state with Zustand 🧠.
  </li>
  <li>
  Use Git and GitHub for version control 🔄.
  </li>
  <li>
  Test APIs with Postman 📝.
  </li>
  <li>Secure apps with JWT authentication 🔑.
  </li>
  <li>Manage data efficiently with MongoDB 💾.
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
