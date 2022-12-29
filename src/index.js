import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from "@faker-js/faker";

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.image()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Alex
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:45 PM</span>
          </div>
          <div className='text'>Nicely done my dude. You is a hacker.</div>
        </div>
      </div>

    </div>
  );
}

root.render(<App />)
/*
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>
*/
