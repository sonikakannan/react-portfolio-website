import React from 'react';

interface IndexProps {
  headerText: string;
  icon: React.ReactNode;
}

const PageHeaderContent: React.FC<IndexProps> = ({ headerText, icon }) => {
  return (
    <div className=' flex items-center justify-between p-5 border-b  border-b-gray-600 '>
      <h2 className=' text-6xl font-medium leading-5 capitalize text-themeMainColor flex'>{headerText}</h2>
      <span className=' text-themeMainColor'>{icon}</span>
    </div>
  );
}

export default PageHeaderContent;
