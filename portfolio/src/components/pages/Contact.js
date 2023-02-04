import React from 'react';
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
      <form>
      <h1>Contact Me</h1>
        <div>
          <input>
            Where someone enters input
            </input>
        </div>
        <Button variant="send">Send</Button>
      </form>
    </div>
  );
}
