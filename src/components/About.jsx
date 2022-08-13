import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#60A5FA] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    <div className='sm:text-right pb-8 pl-4'>
    <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
    About
    </p>
    </div>
    <div></div>
    </div>
    <div className='max-w-[1000px] w-full grid sm:grid grid-cols-2 gap-8 px-4'>
    <div className='sm:text-right text 4xl font-bold'>
    <p>Hi, I'm Mahmoud a React Developer, nice to meet you. Please feel free to browse my portfolio and get some ideas about how I can build you the  project of your dreams.</p>
    </div>
    <div>
    <p>I am passionate about bulding the latest and greatest software that solves the modern problem.
       My aim is to develop key relationships with clients to help meet their needs. What would you do if you had a developer who is a button away from making that happen? 
    </p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default About
