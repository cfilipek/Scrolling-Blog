import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const Footer = () => {
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
              from = {{ opacity: 0.5 }}
              to = {{ opacity: 1 }}
            >
              <div className="footer-text">
                <p>Thank you for reading my blog post. This is currently a work in progress. Onward and up!</p>
              </div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default Footer;
