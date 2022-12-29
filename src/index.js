import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />

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
