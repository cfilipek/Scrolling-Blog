import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import IconOne from '../../assets/icon-1.png';
import IconTwo from '../../assets/icon-2.png';
import IconThree from '../../assets/icon-3.png';

const IconRow = () => {
  return (
    <div className="icon-row-container">
      <Controller>
        <div className="section" />

        <Scene
          // indicators={true}
          duration="400px"
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className="icon-container" />}
          >
             <Tween
              position="1"
              to={{ transform: "rotate(180deg)"}}
            >
              <div className="icon-wrapper">
                <img src={IconTwo} alt="coding icon"/>
              </div>
            </Tween>

            <Tween
              position="2"
              to={{ transform: "rotate(180deg)"}}
            >
              <div className="icon-wrapper">
                <img src={IconOne} alt="coding icon"/>
              </div>
            </Tween>

            <Tween
              position="1"
              to={{ transform: "rotate(180deg)"}}
            >
              <div className="icon-wrapper">
                <img src={IconThree} alt="coding icon"/>
              </div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default IconRow;
