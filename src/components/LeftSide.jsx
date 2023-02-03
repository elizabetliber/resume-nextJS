import React from 'react';
import PreviousJob from "@/components/PreviousJob";

function LeftSide() {
    return (
        <div>
            <h3 className="mb-9 text-h3 text-middle_gray font-bold">Experience</h3>
            <div className="space-y-16">
                <PreviousJob
                    props={{
                        name: "Stealth Startup",
                        job: 'Product Design Lead',
                        yearStart: "2017",
                        yearEnd: "Present",
                        completedWork: [
                            "Started and scaled design team to 6 product designers",
                            "Created a web application design system",
                            "Scaled business to $120m in ARR",
                            "Built internal leveling system and career ladder",
                        ]
                    }}
                />

                <PreviousJob
                    props={{
                        name: "Apple",
                        job: 'Senior Product Designer',
                        yearStart: "2014",
                        yearEnd: "2017",
                        completedWork: [
                            "Built the first iteration of Apple Pay",
                            "Partnered with credit card networks to build infrastructure",
                            "Led the creation of Apple’s payment products",
                            "Drove 383m customers to use Apple Pay",
                        ]
                    }}
                />

                <PreviousJob
                    props={{
                        name: "Adyen",
                        job: 'Product Designer',
                        yearStart: "2013",
                        yearEnd: "2014",
                        completedWork: [
                            "Built multiple different early product initaitves",
                            "Scaled to be a $30b company",
                            "Integrated with Shopify and Amazon",
                            "Recruited 3 designers to join my team",
                        ]
                    }}
                />
                <PreviousJob
                    props={{
                        name: "Acorns",
                        job: 'Designer',
                        yearStart: "2010",
                        yearEnd: "2013",
                        completedWork: [
                            "Helped create MVP of the Acorns app",
                            "1,5m installs in year 1",
                            "$2.4b in AUM when I left",
                            "Built the first design system at the company",
                        ]
                    }}
                />
                <PreviousJob
                    props={{
                        name: "Acorns",
                        job: 'Designer',
                        yearStart: "2010",
                        yearEnd: "2013",
                        completedWork: [
                            "Helped create MVP of the Acorns app",
                            "1,5m installs in year 1",
                            "$2.4b in AUM when I left",
                            "Built the first design system at the company",
                        ]
                    }}
                />
            </div>
            <div className="mt-20 flex text-[27px] text-black font-normal tracking-normal">
                <p>References available upon request</p>
                <div className="mx-3">|</div>
                <p>felix@gmail.com</p>
                <div className="mx-3">|</div>
                <a href="tel: 123.456.7890">123.456.7890</a>
            </div>
        </div>
    );
}

export default LeftSide;