import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
//import ParentComponent from "./propsDemo/ParentComponent"
//import Counter from "./stateDemo/Counter";
//import CounterUsingRef from "./refsDemo/CounterUsingRef";
//import UseEffectDemo from "./useEffectDemo/UseEffectDemo";
import FetchData from "./useEffectDemo/FetchData";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
      {/* <App2 /> */}
      {/* <Counter /> */}
      {/* <CounterUsingRef /> */}
      {/* <UseEffectDemo /> */}
      <FetchData />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
