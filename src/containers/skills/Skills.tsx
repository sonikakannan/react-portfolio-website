import React, { useState } from 'react';
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { SKILLS } from '../../utils/data';
import SkillsCard from './skillsCard/SkillsCard';
import SkillsInfoCard from './skillsInfoCard/SkillsInfoCard';

// Define the type for the skill object
interface SkillsProps {
    title: string;
    icon: string;
    skills:  { skill: string; percentage: string }[];
}

const Skills: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState<SkillsProps>(SKILLS[0]);

    const handleSelectedSkill = (data: SkillsProps) => {
        setSelectedSkill(data);
    }

    return (
        <section className=' relative pb-12'>
            <PageHeaderContent 
                headerText="My Skills"
                icon={<BsInfoCircleFill size={30} />}
            />
            <div id='skills-content' className='grid lg:grid-cols-2  w-full container mx-auto  items-center mt-14 gap-3' >
                <div id='skills' className=' grid grid-cols-2 justify-around items-center gap-9 lg:max-w-[900px] lg:container lg:mx-auto mx-6 my-12 text-center '>
                    {SKILLS.map((item, index) => (
                        <SkillsCard
                            key={index}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => handleSelectedSkill(item)}
                        />
                    ))}
                </div>
                <div id='skills-info' className=' text-white  max-w-[900px] container mx-auto'>
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
