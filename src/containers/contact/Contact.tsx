import React, { useState, ChangeEvent, FormEvent } from "react";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

interface FormData {
    username: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors: { [key: string]: string } = {};

        if (!formData.username.trim()) {
            validationErrors.username = "Username is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S*/.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }

        if (!formData.message.trim()) {
            validationErrors.message = "Please enter your message";
        } else if (formData.message.trim().split(/\s+/).length < 30) {
            validationErrors.message = "Please enter at least 30 words";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const formDataToSend = new FormData(event.currentTarget);
                formDataToSend.append("access_key", "86804bf6-6b1f-4101-a673-3ccd873d93a7");

                const object = Object.fromEntries(formDataToSend);
                const json = JSON.stringify(object);

                const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: json,
                }).then((res) => res.json());

                if (res.success) {
                    console.log("Success", res);
                    alert("Form submitted successfully");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <section className=" relative">
            <PageHeaderContent headerText="Contact" icon={<BsInfoCircleFill size={30} />} />
            <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: "translateX(-200px)",
                }}
                end={{
                    transform: "translateX(0px)",
                }}
            >
                <div className="flex items-center justify-start w-full px-5">
                <h1 className=" text-white text-center text-3xl font-semibold ml-5 mt-5 border-b-2 py-2 border-b-themeMainColor w-48 tracking-widest ">LET'S TALK</h1>

                </div>
            </Animate>

            <div className=" w-full h-full container mx-auto pt-12 ">                
                    <form onSubmit={handleSubmit} className="flex flex-col flex-wrap mt-8 items-center justify-center gap-7">
                    <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your name"
                            name="username"
                            value={formData.username}
                            className="text-white border border-themeMainColor w-300 md:w-500 h-16 pl-5 rounded  bg-transparent   text-xl"
                            onChange={handleChange}
                        />
                        
                        </Animate>
                        {errors.username && <span className="text-red-400 text-start">{errors.username}</span>}
                        <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                     <input
                            type="text"
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            className="border border-themeMainColor w-300 md:w-500 h-16 pl-5 rounded  bg-transparent  text-xl"
                            onChange={handleChange}
                        />
                </Animate>
                {errors.email && <span className="text-red-400">{errors.email}</span>}
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            rows={8}
                            placeholder="Enter your message"
                            className="border text-white border-themeMainColor w-300 md:w-500 pl-5 rounded  bg-transparent  text-xl"
                            onChange={handleChange}
                        ></textarea>
                </Animate>
                {errors.message && <span className="text-red-400">{errors.message}</span>}
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateY(200px)",
                    }}
                    end={{
                        transform: "translateY(0px)",
                    }}
                >
                     <button
                            type="submit"
                            className=" text-2xl  font-medium rounded-md mt-3  cursor-pointer py-4 px-16 md:px-24  hover:text-themeMainColor hover:border hover:border-themeMainColor bg-themeMainColor hover:bg-transparent text-black"
                        >
                            Submit now
                        </button>
                </Animate>
                    </form>

            </div>
        </section>
    );
};

export default Contact;
