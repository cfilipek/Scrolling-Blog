import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import Question from '../../assets/question.png';

const BottomContent = () => {

  return (
    <div className="content-container">
       <Controller>
        <div className="section" />

        <Scene
          indicators={true}
          duration="100%"
          triggerHook="onEnter"
        >
          <Timeline>
              <Tween
                    position="1"
                    from={{ transform: 'translateY(-100%)', opacity:0 }}
                    to={{ transform: 'translateY(-10%)', opacity:1 }}
                  >
                    <div className="icon-wrapper">
                      <img src={Question} alt="question asking icon"/>
                    </div>
                  </Tween>
            <div>
              <p>Once I got over my initial fears involving asking questions and stopped worrying about appearing competent, I want to say it was smooth sailing... but that’s actually one of the things that I love about the wonderous world of development: there is always more to learn and choppy waters ahead. </p>

              <p>In a very short amount of time I’ve learned new and improved ways of approaching even some of the smallest overlooked areas of my programming abilities. Let’s just say that I’ve learned enough that I never want to look at some of previous code bases again due to the fact that all of their even minute errors would taunt me to oblivion. Onward and upward, as a mentor of mine likes to say.</p>

              <p>Does there ever feel like enough time in the day/week/eternity to feel mastery over everything dev related? No, and there never will be and that is just the nature of this field. But I do feel more confident in my ability to rise to the challenge. Not just because of my A plus googling abilities, but because I know I can ask questions and because once I ask a question or find out on my own how to do something, that is one more tool in my toolkit.</p>

              <h3 className="recognition-text">Special recognition goes to my mentor30, my manager, and everyone on my team for making my first 30 days so memorable. I truly look forward to coming to work each day and facing new challenges head on.</h3>
            </div>
         </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default BottomContent;
