import React from 'react';
import Project from '../ProjectComponent';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      
      <h2>My projects</h2>

      <Project 
        title="WebDevPortolio" 
        image="iamge.png" 
        deployedLink="https://www.google.com/" 
        github="https://www.github.com/MicheleTornetta/" />
    </div>
  );
}