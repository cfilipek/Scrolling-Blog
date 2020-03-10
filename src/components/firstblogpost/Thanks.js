import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const Thanks = () => {
  return (
    <div className="thanks-wrapper">
      <Controller>
        <div className="section" />

        <Scene
          // indicators={true}
          duration="100%"
          triggerHook="onEnter"
        >
          <Timeline>
          <Tween
            position="1"
            wrapper={
              <div className="text-container" />
            }
            from= {{
              opacity: 0,
              ease: 'Expo.easeOut',
            }}
          >
              <div className="thanks-text">
                <h4>Special thanks to all my mentors, friends and teachers who have helped me and continue to help me on this journey.</h4>
              </div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default Thanks;
