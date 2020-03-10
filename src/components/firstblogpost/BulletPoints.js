import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const BulletPoints = () => {

  return (
    <div className="content-container">
       <Controller>
        <div className="section" />

        <Scene
          // indicators={true}
          duration="100%"
          triggerHook="onEnter"
        >
          <Timeline>
            <p>To rewind a bit: what prompted me to reach out in the first place was the fact that I found myself hesitating to ask questions because I wanted to appear competent. Looking back, I am a competent programmer AND no one knows everything AND smart people ask questions too.</p>

            <p>The fear of asking too many questions was silly for a multitude of reasons:</p>

            <Tween
              position="1"
              from={{ transform: 'translateX(100%)' }}
              to={{ transform: 'translateX(0%)' }}
            >
             <div className="content-number-circle">1.</div>
            </Tween>

            <p>Everyone I work with is nice & welcoming; and I was explicitly told by my manager that he would answer any questions and that there were no dumb questions.</p>

            <Tween
              position="2"
              from={{ transform: 'translateX(100%)' }}
              to={{ transform: 'translateX(0%)' }}
            >
             <div className="content-number-circle">2.</div>
            </Tween>

            <p>I had just started working there--um that week! How could I possibly know everything?!</p>

            <Tween
              position="3"
              from={{ transform: 'translateX(100%)' }}
              to={{ transform: 'translateX(0%)' }}
            >
             <div className="content-number-circle">3.</div>
            </Tween>

            <p>I learned that it is better to ask a question upfront, especially if it involves an approach when first starting, than to have gone ahead even though you were unsure only to have to do it all over because your initial approach was incorrect.</p>

            <Tween
              position="4"
              from={{ transform: 'translateX(100%)' }}
              to={{ transform: 'translateX(0%)' }}
            >
             <div className="content-number-circle">4.</div>
            </Tween>

            <p>Asking the right questions, because questions are indeed a necessary part of any project, shows that you have an attention to detail, care, etc.</p>
           </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default BulletPoints;
