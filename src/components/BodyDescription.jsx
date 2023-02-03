import React from 'react';

import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

function BodyDescription() {
    return (
        <div className="w-[100%]">
            <div className="max-w-[2250px] flex flex-row justify-between mx-auto mx-36">
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    );
}

export default BodyDescription;