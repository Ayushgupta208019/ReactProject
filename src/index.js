import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RED from './RedChief';

function Hello(){ //function component
  return (
    <h2>byee</h2>
  )
}


//in React Variable called as State

// function RedWood(){
//   const [y, setY] = useState(20) //This is syntax for declare a varible in React. "State"

//   return <h1>Hello, The final value of y is {y}</h1>
// }

let SalaryDetails = () =>{
  const [salary, setSalary] = useState(50000)


  let incr = () =>{
    setSalary(salary + 10000)
  }
  return <div>
    <h1>Salary is {salary}</h1>
    <button onClick={() =>{ incr(); }}>Increment My Salary Now</button>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello />
    <RedWood />
    <RED />
    <SalaryDetails />
  </React.StrictMode>
);
