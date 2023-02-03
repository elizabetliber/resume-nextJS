import React from 'react';

function PreviousJob({props: {name, job, yearStart, yearEnd, completedWork}}) {
    return (
        <div>
            <h4 className="text-4xl text-black font-bold tracking-normal mb-5">{name}</h4>
            <div className="flex text-4xl text-middle_gray font-normal tracking-normal mb-6">
                <p>{job}</p>
                <div className="mx-4">|</div>
                <p>{yearStart}</p> - <p>{yearEnd}</p>
            </div>
            <div className="space-y-6">
                {completedWork && completedWork.map((item) => {
                    return <p key={item}
                              className="text-4xl font-normal text-black tracking-normal">- {item}</p>
                })}
            </div>
        </div>
    );
}

export default PreviousJob;