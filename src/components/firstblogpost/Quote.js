import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const Quote = () => {
  return (
    <div className="quote-wrapper">
      <Controller>
        <div className="section" />

        <Scene
          // indicators={true}
          duration="300px"
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className="quote-container" />}
          >
             <Tween
              position="1"
              from = {{ transform: 'scaleX(0)' }}
              to = {{ transform: 'scaleX(1)' }}
            >
              <div className="quote-text">
                <h3>“Do you really believe you’re smart enough to trick all these smart people into thinking you’re smarter than you actually are?”</h3>
              </div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default Quote;
