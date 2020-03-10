import React, { useRef, useEffect } from 'react';
import { TweenMax , TimelineLite, Power3 } from 'gsap';

import Mouse from '../../assets/mouse.png';

const Header = () => {
  let app = useRef(null);
  let tl = new TimelineLite({delay: .8});

  useEffect(()=> {
    const title = app.firstElementChild;
    const content = app.children[1];

    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    tl.from(title.children, 1, {opacity: 0, y: 44, ease: Power3.easeOut, delay: .5}, .15, 'Start')
    .from(content, 1, { opacity: 0, ease: Power3.easeOut }, 1.4)
  })


  return (
    <div className="header-container" ref={el => app = el}>
        <div className="header-title">
          <h2>What I learned my first month as a jr. Developer</h2>
        </div>
        <div className="header-content">
          <h4>A scrolling blog post by Claire Filipek</h4>
          <div className="header-content-image">
            <img src={Mouse} alt="computer mouse"/>
          </div>
        </div>
    </div>
  );
}

export default Header;
