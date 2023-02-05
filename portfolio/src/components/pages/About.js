import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portrait from '../../images/mtbluebrdr.png';

export default function About() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img src={Portrait} 
                className="profilepic"
                alt="Michele Tornetta"
          />
        </div>
        <div class="col-9">  
          <h1>About Me</h1>
          <p>
            Type something about myself...want domething that will take up an entire column to see how far the container will reach
          </p>
        </div>
      </div>
    </div>
  );
}
