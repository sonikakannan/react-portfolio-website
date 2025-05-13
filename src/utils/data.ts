export interface SkillsProps {
    icon: JSX.Element;
    title: string;
    skills: string[]; 
}

export const SKILLS =[
    {
        title: "Forntend",
        icon:"" ,
        skills:[
            { skill: "HTML5", percentage: "90%"},
            { skill: "CSS", percentage: "85%"},
            { skill: "JavaScript", percentage: "85%"},
            { skill: "React", percentage: "80%"},
        ],
    },
    {
        title: "Backend & Database",
        icon:"" ,
        skills:[
            { skill: "Node.js", percentage: "75%"},
            { skill: "Express.js", percentage: "85%"},
            {skill: "MongoDB", percentage: "80%"}
        ],
    },
    {
        title: "FrameWorks & Libraries",
        icon: "",
        skills:[
            { skill: "Next Js", percentage: "80%"},    
            { skill: "Tailwind CSS", percentage: "90%"}, 
            { skill: "Redux Toolkit", percentage: "80%"}, 
        ],
    },
    {
        title: "Tools",
        icon: "",
        skills:[
            { skill: "Git & GitHub", percentage: "85%"},
            { skill: "Visual Studio Code", percentage: "80%"},
            { skill: "Postman", percentage: "75%"},
        ],
    },
    // {
    //     title: "Aother Skills",
    //     icon: "",
    //     skills:[
    //         { skill: "CSS Architecture", percentage: "90%"},
    //         { skill: "CSS", percentage: "80%"},
    //         { skill: "JavaScript", percentage: "75%"},
    //         { skill: "Typscript", percentage: "80%"},
    //         { skill: "React.js", percentage: "75%"},
    //     ],
    // },
]