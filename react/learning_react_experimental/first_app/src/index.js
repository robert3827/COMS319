import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { greeting } from './greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myElement = <h1>I love JSX</h1>

const myElement2 = (
  <div>


  </div>
);
root.render(
  <div>
    {/* Brackets so we can include JS in our HTML */}
  {myElement}    
  {greeting("Robert")}
  {greeting(greeting("Robert"))}

{/* Doesn't work with argument functions :). HTML doesn't support args  */}
  <greeting /> 
  </div>

);
