import React from 'react';

function PreviousJob({
  props: { name, job, yearStart, yearEnd, completedWork },
}) {
  return (
    <div>
      <h4 className="2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl text-black font-bold tracking-wide my-7 2xl:mt-16">
        {name}
      </h4>
      <div className="flex flex-wrap 2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl text-gray-500 font-normal mb-5 tracking-wide">
        <p>{job}</p>
        <div className="mx-4">|</div>
        <p>{yearStart}</p> - <p>{yearEnd}</p>
      </div>
      <div className="space-y-6">
        {completedWork &&
          completedWork.map((item) => (
            <p
              key={item}
              className="2xl:text-4xl lg:text-[26px] sm:text-2xl text-xl font-normal text-black tracking-wide"
            >
              - {item}
            </p>
          ))}
      </div>
    </div>
  );
}

export default PreviousJob;
