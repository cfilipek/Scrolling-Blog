import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const Wordsoup = () => {
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
              from={{ x: '130%' }}
              to={{ x: '40%' }}
            >
              <div className="wordsoup-first-text">
                <h2>mentorship</h2>
              </div>
            </Tween>

            <Tween
              position="2"
              from={{ x: "-100%" }}
              to={{ x: "10%" }}
            >
              <div className="wordsoup-second-text de-emphasis">
                <h2>imposter<br/>syndrome</h2>
              </div>
            </Tween>
            <Tween
              position="2"
              from={{ x: "100%" }}
              to={{ x: "55%" }}
            >
              <div className="wordsoup-second-text">
                <h2>accountability</h2>
              </div>
            </Tween>

            <Tween
              position="3"
              from={{ x: "-100%" }}
              to={{ x: "10%" }}
            >
              <div className="wordsoup-second-text">
                <h2>acclimation</h2>
              </div>
            </Tween>
          </Timeline>
        </Scene>

        <div className="section" />
      </Controller>
    </div>
  );
}

export default Wordsoup;
