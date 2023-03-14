import React from 'react';

import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';

function BodyDescription() {
  return (
    <div className="w-[100%]">
      <div className="container flex flex-col md:flex-row justify-between mx-auto xl:space-x-60 md:space-x-28 md:space-y-0 space-y-16">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default BodyDescription;
