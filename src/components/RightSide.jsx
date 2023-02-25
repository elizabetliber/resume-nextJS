import React from 'react';

function RightSide() {
    return (
        <div className="flex flex-col md:flex-[1_1_50%] flex-[1_1_100%]">
            <div>
                <h3 className="mb-9 lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">Education</h3>
                <h4 className="mb-9 lg:text-3xl sm:text-2xl text-xl font-bold text-black tracking-wide">University Name</h4>
                <div className="sm:text-2xl text-xl font-normal text-gray-500 space-y-5 tracking-wide">
                    <p>Degree – Emphasis</p>
                    <p>Minor</p>
                    <p>Years Attended</p>
                </div>
            </div>
            <div>
                <h3 className="mt-[80px] mb-7 lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">Achievements</h3>
                <div className="sm:text-2xl text-xl font-normal text-black space-y-5 tracking-wide">
                    <p>Name something you did like win an award</p>
                    <p>Or maybe a hackathon that you won</p>
                </div>
            </div>
            <div>
                <h3 className="mt-[88px] mb-6 lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">Skills</h3>
                <div className="sm:text-2xl text-xl font-normal text-black space-y-5 tracking-wide">
                    <p>Name something you did like win an award</p>
                    <p>Or maybe a hackathon that you won</p>
                    <p>Or maybe a hackathon that you won</p>
                    <p>Or maybe a hackathon that you won</p>
                    <p>Or maybe a hackathon that you won</p>
                </div>
            </div>
            <div className="mt-32">
                <h3 className="mb-6 2xl:text-4xl lg:text-3xl text-2xl text-gray-500 font-bold">Software and applications</h3>
                <div className="space-y-[58px]">
                    <div>
                        <h4 className="mb-5 sm:text-2xl text-xl text-black font-normal underline">A discipline here, like
                            design</h4>
                        <div className="flex justify-between whitespace-nowrap sm:text-2xl text-xl text-black space-x-4 font-normal space-x-4 max-w-sm sm:max-w-md md:max-w-full">
                            <div className="space-y-6 flex-[1_1_50%] sm:flex-[1_1_40%]">
                                <p>Cinema 4D</p>
                                <p>Keyshot</p>
                                <p>Keynote</p>
                                <p>Principle</p>
                                <p>Tableau</p>
                            </div>
                            <div className="space-y-6 flex-[1_1_50%] sm:flex-[1_1_60%]">
                                <p>HTML</p>
                                <p>CSS/SCSS</p>
                                <p>JavaScript</p>
                                <p>Atom</p>
                                <p>VSCode</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-9 sm:text-2xl text-xl text-black font-normal underline">A discipline here, like
                            design</h4>
                        <div className="flex justify-between whitespace-nowrap sm:text-2xl text-xl text-black font-normal space-x-4 max-w-sm sm:max-w-md md:max-w-full">
                            <div className="space-y-6 flex-[1_1_50%] sm:flex-[1_1_40%]">
                                <p>Tableau</p>
                                <p>HotJar</p>
                                <p>Tableau</p>
                            </div>
                            <div className="space-y-6 flex-[1_1_50%] sm:flex-[1_1_60%]">
                                <p>Google Slides</p>
                                <p>Google Sheets</p>
                                <p>Google Docs</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-9 sm:text-2xl text-xl text-black font-normal underline">A discipline here, like
                            design</h4>
                        <div className="flex justify-between whitespace-nowrap sm:text-2xl text-xl text-black font-normal space-x-4 max-w-sm sm:max-w-md md:max-w-full">
                            <div className="space-y-6 flex-[0_1_50%] sm:flex-[0_1_40%]">
                                <p>Figma</p>
                                <p>Sketch</p>
                                <p>InVision</p>
                            </div>
                            <div className="space-y-6 flex-[0_1_50%] sm:flex-[0_1_60%]">
                                <p>After Effects</p>
                                <p>Photoshop</p>
                                <p>Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSide;