import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import {  Suspense } from "react"; // Lazy loading

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate('/contact');
    };

    

    return (
        <section className="relative">
            {/* Use inline critical CSS and defer large CSS */}
            <div className="flex flex-col pt-48 mx-auto max-w-screen-xl px-4 py-32 lg:flex justify-cente items-center text-center z-10 container ">
                <div className="text-themeMainColor  tracking-wide sm:tracking-wider   text-6xl md:text-7xl lg:text-8xl">
                <h1 className="sm:leading-custom leading-relaxed  relative overflow-hidden whitespace-nowrap animate-typingEffect">
                    Hello! I'm Sonika
                </h1>
                <span className="sm:leading-custom leading-relaxed  relative overflow-hidden whitespace-nowrap animate-typingEffect ">
                    MERN Stack DeveloPer
                </span>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateY(450px)", // Higher for performance
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}
                    >
                        <div className="flex gap-8 mt-12">
                            <button onClick={handleNavigate} className="text-2xl animate-bounce text-themeMainColor font-medium rounded-md cursor-pointer py-4 px-20 sm:px-24 border border-themeMainColor hover:bg-themeMainColor hover:text-black">
                                Hire Me
                            </button>
                           <a 
                                   href="https://drive.google.com/file/d/10K6Nrfz-IcVuKMGnlBmmbmRyvuUNUrpQ/view?usp=sharing"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className=""
                           >
                           <button 
                                className="text-2xl animate-bounce font-medium rounded-md cursor-pointer py-4 px-20 sm:px-24 hover:text-themeMainColor hover:border hover:border-themeMainColor bg-themeMainColor hover:bg-transparent text-black">
                                Resume
                            </button>
                           </a>
                        </div>
                    </Animate>
                </Suspense>
            </div>
        </section>
    );
};

export default Home;
