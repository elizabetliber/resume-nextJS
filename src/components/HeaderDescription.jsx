import React from 'react';

function HeaderDescription() {
    return (
        <div className="w-[100%]">
            <div className="container mx-auto">
                <div className="border-b border-light_gray pb-12 mb-12 lg:pb-24 lg:mb-24">
                    <h2 className="lg:text-7xl sm:text-6xl text-4xl text-gray-800 font-bold">Felix Driscoll</h2>
                    <div className="flex flex-wrap sm:text-2xl text-xl text-black mt-5 font-normal tracking-[0.03em]">
                        <h4>Job title</h4>
                        <div className="mx-6">|</div>
                        <a className="cursor-pointer hover:underline">Link to your website</a>
                    </div>
                    <p className="sm:leading-[3.9rem] leading-[2.5rem] sm:text-2xl text-xl text-gray-400 mt-8 sm:mt-12 font-normal tracking-[0.03em]">
                        Summarize who you are. Nulla vel iaculis orci,
                        in sagittis turpis. Suspendisse vehicula tellus felis,
                        a pharetra sapien finibus nec. Quisque quam odio, malesuada ac risus sit amet.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeaderDescription;