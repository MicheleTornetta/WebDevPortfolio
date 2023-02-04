import React from 'react';
import Portfolio from './pages/Portfolio';
import '../styles/cardStyle.css';


// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function card() {
  return (
    <div>
      <div>
        <Portfolio/>
      </div>
    </div>

  );
}

export default card;
