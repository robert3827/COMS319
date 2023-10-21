import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, UserCard } from './Greetings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Greeting title = "Hello" />
    <UserCard x="World"/>
    <Greeting y={100}/>
  </div>

);


