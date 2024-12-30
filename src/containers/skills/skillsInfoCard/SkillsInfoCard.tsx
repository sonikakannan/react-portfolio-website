import React from 'react';

interface SkillsInfoCardProps {
  heading: string;
  skills: { skill: string; percentage: string }[];
}

const SkillsInfoCard: React.FC<SkillsInfoCardProps> = ({ heading, skills }) => {
  return (
    <div id="skills-info-card" className=' mx-8 border border-themeMainColor  rounded-lg'>
      <h1 className=' text-2xl font-medium mb-5 border-b border-b-themeMainColor py-6 px-8 text-themeMainColor'>{heading}</h1>
      <div id="skills-info-content" className=' mb-14'>
        {skills.map((item, index) => (
          <div key={index} className=" px-7 mb-7">
            <div id="skill-info" className=' flex justify-between items-center text-xl mb-3 '>
              <p>{item.skill}</p>
              <p id="percentage" className=' text-themeMainColor'>{item.percentage}</p>
            </div>
            <div id="skill-progress-bg" className=' rounded-full h-3 w-full bg-navBgColor mb-4 overflow-hidden'>
              <div
                id="skill-progress"
                style={{ width: item.percentage }}
                className=' w-0 transition-all  duration-500 ease-in-out bg-themeMainColor h-3 rounded-full animate-progressBar'
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsInfoCard;
