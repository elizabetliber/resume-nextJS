import React from 'react';

function HeaderDescription() {
    return (
        <div className="w-[100%]">
            <div className="max-w-[2250px] mx-auto mt-28 mx-36">
                <div className="border-b border-light_gray pb-24 mb-24">
                    <h2 className="text-h2 text-dark_gray font-bold">Felix Driscoll</h2>
                    <div className="flex text-4xl text-black mt-1.5 font-normal tracking-normal">
                        <h4>Job title</h4>
                        <div className="mx-6">|</div>
                        <a className="cursor-pointer hover:underline">Link to your website</a>
                    </div>
                    <p className="max-w-[1600px] leading-big text-4xl text-gray mt-12 font-normal tracking-normal">
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