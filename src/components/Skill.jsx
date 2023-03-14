import React from 'react';

function Skill({ props: { subtitle, leftSide, rightSide } }) {
  return (
    <div>
      <h4 className="mb-5 2xl:mt-12 mt-7 2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl text-black font-normal underline">
        {subtitle}
      </h4>
      <div className="flex justify-between whitespace-nowrap 2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl text-black space-x-4 font-normal space-x-4 max-w-sm sm:max-w-md md:max-w-full">
        <div className="space-y-6 flex-[1_1_50%] sm:flex-[1_1_40%]">
          {leftSide.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="space-y-6 flex-[1_1_50%] sm:flex-[1_1_60%]">
          {rightSide.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
