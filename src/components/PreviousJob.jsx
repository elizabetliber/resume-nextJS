import React from 'react';

function PreviousJob({props: {name, job, yearStart, yearEnd, completedWork}}) {
    return (
        <div>
            <h4 className="sm:text-3xl text-2xl text-black font-bold tracking-wide mb-5">{name}</h4>
            <div className="flex flex-wrap sm:text-2xl text-xl text-gray-500 font-normal tracking-wide mb-6">
                <p>{job}</p>
                <div className="mx-4">|</div>
                <p>{yearStart}</p> - <p>{yearEnd}</p>
            </div>
            <div className="space-y-6">
                {completedWork && completedWork.map((item) => {
                    return <p key={item}
                              className="sm:text-2xl text-xl font-normal text-black tracking-wide">- {item}</p>
                })}
            </div>
        </div>
    );
}

export default PreviousJob;