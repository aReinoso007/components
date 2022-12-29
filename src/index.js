import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import { faker } from "@faker-js/faker";
import ApprovalCard from './ApprovalCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 4:20 AM"
        text="Hola dude"
        avatar={faker.image.avatar()}
      />
      <ApprovalCard />
      <CommentDetail
        author="Pablo"
        timeAgo="Today at 5:22 AM"
        text="que mas dude?"
        avatar={faker.image.avatar()}
      />
      <ApprovalCard />
      <CommentDetail
        author="Akio"
        timeAgo="Today at 5:20 PM"
        text="nada dude"
        avatar={faker.image.avatar()}
      />
      <ApprovalCard />
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
