import React from 'react';

interface SkillsCardProps {
    title: string;
    iconUrl: string;
    isActive: boolean; // Changed to boolean for correct usage in className
    onClick: () => void;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <div onClick={onClick} className='text-white border  border-themeMainColor rounded-lg py-11 cursor-pointer hover:bg-themeMainColor hover:text-black' >
            <div id="skill-icon">
                <img src={iconUrl} alt="" />
            </div>
            <span className=' text-xl font-medium'>{title}</span>
        </div>
    );
}

export default SkillsCard;
