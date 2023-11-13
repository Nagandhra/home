import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const SpeedometerComponent = () => {
  return (

    <div>
      <ReactSpeedometer
        maxValue={100}
        width={130}
        ringWidth={27}
        value={50}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        height={80}
        needleColor="black"
        segmentColors={["#1CBD9C", "#F0F5F5"]}
        customSegmentStops={[0, 50, 100]}
        segments={10}
        needleHeightRatio={0.7}
        textColor={"#ffff"}
      />
    </div>

  );
};


export default SpeedometerComponent;
