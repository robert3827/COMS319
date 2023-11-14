import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import tshirt from './tshirt.jpg'


const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState();

  useEffect(()=>{console.log("Render");}, [count, message])

  return(
    <div>
      <img src={tshirt}></img>
      <h1>Counter: {count}</h1>
      <button onClick={()=>{setCount(count+1);console.log(count)}}>Add</button>
      <button onClick={()=>{setCount(count-1);console.log(count)}}>Subtract</button>
      <button onClick={()=>{setCount(count*2);console.log(count)}}>🤣</button>
      <br />

      <input onChange={(e)=>{setMessage(e.target.value);console.log(e.target.value)}}></input>
      <button onClick={()=>{}}>Submit Your Message</button>

      <h1>You have typed: {message}</h1>
      {/* <h1>{Submitted}</h1> */}
    </div>
  )
}


root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);


