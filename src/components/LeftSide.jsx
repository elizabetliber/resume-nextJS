import React from 'react';
import PreviousJob from '@/components/PreviousJob';

const previousJob = [
  {
    name: 'Stealth Startup',
    job: 'Product Design Lead',
    yearStart: '2017',
    yearEnd: 'Present',
    completedWork: [
      'Started and scaled design team to 6 product designers',
      'Created a web application design system',
      'Scaled business to $120m in ARR',
      'Built internal leveling system and career ladder',
    ],
  },
  {
    name: 'Apple',
    job: 'Senior Product Designer',
    yearStart: '2014',
    yearEnd: '2017',
    completedWork: [
      'Built the first iteration of Apple Pay',
      'Partnered with credit card networks to build infrastructure',
      'Led the creation of Apple’s payment products',
      'Drove 383m customers to use Apple Pay',
    ],
  },
  {
    name: 'Adyen',
    job: 'Product Designer',
    yearStart: '2013',
    yearEnd: '2014',
    completedWork: [
      'Built multiple different early product initaitves',
      'Scaled to be a $30b company',
      'Integrated with Shopify and Amazon',
      'Recruited 3 designers to join my team',
    ],
  },
  {
    name: 'Acorns',
    job: 'Designer',
    yearStart: '2010',
    yearEnd: '2013',
    completedWork: [
      'Helped create MVP of the Acorns app',
      '1,5m installs in year 1',
      '$2.4b in AUM when I left',
      'Built the first design system at the company',
    ],
  },
  {
    name: 'Acorns',
    job: 'Designer',
    yearStart: '2010',
    yearEnd: '2013',
    completedWork: [
      'Helped create MVP of the Acorns app',
      '1,5m installs in year 1',
      '$2.4b in AUM when I left',
      'Built the first design system at the company',
    ],
  },
];

function LeftSide() {
  return (
    <div className="flex flex-col md:flex-[1_1_50%] flex-[1_1_100%]">
      <h3 className="2xl:text-[46px] lg:text-4xl sm:text-3xl text-2xl text-gray-500 font-bold">
        Experience
      </h3>
      <div className="space-y-12 md:space-y-16">
        {previousJob &&
          previousJob.map((item, index) => (
            <PreviousJob key={index} props={item} />
          ))}
      </div>
      <div className="flex flex-wrap sm:mt-20 mt-14 xl:text-2xl text-xl text-black font-normal">
        <p className="mr-3">References available upon request</p>|{' '}
        <p className="mx-3">felix@gmail.com</p>|
        <p className="ml-3">123.456.7890</p>
      </div>
    </div>
  );
}

export default LeftSide;
