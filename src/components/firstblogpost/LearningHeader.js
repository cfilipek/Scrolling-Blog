import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import Eye from '../../assets/eye.png';
import EyeClosed from '../../assets/eye-closed.png';

const LearningHeader = () => {
  return (
    <div className="wordsoup-wrapper">
      <Controller>
        <div className="section" />

        <Scene
          // indicators={true}
          duration="100%"
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className="timeline" />}
          >
             <Tween
              position="1"
              from={{ x: '110%' }}
              to={{ x: '10%' }}
            >
              <div className="wordsoup-first-text">
                <h2>Learning Experiences</h2>
              </div>
            </Tween>

            <Tween
              position="3"
              from={{ display: 'block' }}
              to={{ display: 'none' }}
            >
              <div className="wordsoup-image">
                <img src={EyeClosed} alt=" closed eye"/>
              </div>
            </Tween>
            <Tween
              position="4"
              from={{ display: 'none' }}
              to={{ display: 'block' }}
            >
              <div className="wordsoup-image">
                <img src={Eye} alt="eye"/>
              </div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default LearningHeader;
