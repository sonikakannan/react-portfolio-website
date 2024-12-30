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
            { skill: "CSS3(Sass/SCSS)", percentage: "80%"},
            { skill: "JavaScript", percentage: "75%"},
            { skill: "Typscript", percentage: "80%"},
            { skill: "React.js", percentage: "75%"},
        ],
    },
    {
        title: "Backend",
        icon: "",
        skills:[
            { skill: "Java", percentage: "80%"},
            { skill: "Spring Boot", percentage: "75%"},    
        ],
    },
    {
        title: "Tools",
        icon: "",
        skills:[
            { skill: "Git & GitHub", percentage: "85%"},
            { skill: "Visual Studio Code", percentage: "75%"},
            { skill: "Webpack", percentage: "75%"},
            { skill: "Testing", percentage: "80%"},
            { skill: "Module Bunddler(Vite)", percentage: "75%"},
        ],
    },
    {
        title: "Aother Skills",
        icon: "",
        skills:[
            { skill: "CSS Architecture", percentage: "90%"},
            { skill: "CSS", percentage: "80%"},
            { skill: "JavaScript", percentage: "75%"},
            { skill: "Typscript", percentage: "80%"},
            { skill: "React.js", percentage: "75%"},
        ],
    },
]