import React from 'react';
import Portrait from '../../images/mtbluebrdr.png';

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img src={Portrait} 
                className="profilepic"
                alt="Michele Tornetta"
          />
        </div>
        <div className="col-9">  
          <h1>About Me</h1>
            <p>
            I have a background in online marketing. Part of my marketing experience would include developing html4 email templates (since outlook doesn't like CSS) for email campaigns I designed. When designing a layout, it was important to stay true to the hospital system's branding.
            </p>
            <p>
            When I was promoted to Marketing Director, I worked with creative designers who could also create email templates. However, due to the length of time going back and forth and some hard deadlines, I decided to teach myself html 4, photoshop, InDesign and other programs to do the work in-house.
            </p>
        </div>
      </div>
    </div>
  );
}
