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
            { skill: "CSS", percentage: "80%"},
            { skill: "JavaScript", percentage: "75%"},
            { skill: "Typscript", percentage: "70%"},
        ],
    },
    {
        title: "FrameWorks & Libraries",
        icon: "",
        skills:[
            { skill: "React", percentage: "75%"},
            { skill: "Next Js", percentage: "80%"},    
        ],
    },
    {
        title: "Tools",
        icon: "",
        skills:[
            { skill: "Git & GitHub", percentage: "85%"},
            { skill: "Visual Studio Code", percentage: "75%"},
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