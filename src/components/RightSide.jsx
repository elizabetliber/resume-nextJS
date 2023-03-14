import React from 'react';
import Skill from '@/components/Skill';

const skills = [
  {
    subtitle: 'A discipline here, like design',
    leftSide: ['Cinema 4D', 'Keyshot', 'Keynote', 'Principle', 'Tableau'],
    rightSide: ['HTML', 'CSS/SCSS', 'JavaScript', 'Atom', 'VSCode'],
  },
  {
    subtitle: 'A discipline here, like design',
    leftSide: ['Figma', 'Sketch', 'InVision'],
    rightSide: ['After Effects', 'Photoshop', 'Illustrator'],
  },
  {
    subtitle: 'A discipline here, like design',
    leftSide: ['Tableau', 'HotJar', 'Tableau'],
    rightSide: ['Google Slides', 'Google Sheets', 'Google Docs'],
  },
];

function RightSide() {
  return (
    <div className="flex flex-col md:flex-[1_1_50%] flex-[1_1_100%]">
      <div>
        <h3 className="2xl:text-[46px] lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">
          Education
        </h3>
        <h4 className="2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl my-7 2xl:mt-16 font-bold text-black tracking-wide">
          University Name
        </h4>
        <div className="2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl font-normal text-gray-500 space-y-5 tracking-wide">
          <p>Degree – Emphasis</p>
          <p>Minor</p>
          <p>Years Attended</p>
        </div>
      </div>
      <div>
        <h3 className="mt-[80px] mb-7 2xl:text-[46px] lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">
          Achievements
        </h3>
        <div className="2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl font-normal mb-5 2xl:mt-12 mt-7 text-black space-y-5 tracking-wide ">
          <p>Name something you did like win an award</p>
          <p>Or maybe a hackathon that you won</p>
        </div>
      </div>
      <div>
        <h3 className="mt-[88px] mb-6 2xl:text-[46px] lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">
          Skills
        </h3>
        <div className="2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl font-normal mb-5 2xl:mt-12 mt-7 text-black space-y-5 tracking-wide">
          <p>Name something you did like win an award</p>
          <p>Or maybe a hackathon that you won</p>
          <p>Or maybe a hackathon that you won</p>
          <p>Or maybe a hackathon that you won</p>
          <p>Or maybe a hackathon that you won</p>
        </div>
      </div>
      <div className="xl:mt-32 mt-24">
        <h3 className="mb-6 2xl:text-[46px] lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">
          Software and applications
        </h3>
        <div className="space-y-[58px]">
          {skills &&
            skills.map((item, index) => <Skill props={item} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default RightSide;
