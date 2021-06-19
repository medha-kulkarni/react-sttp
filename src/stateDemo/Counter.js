import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  let incrementCounter = () => {
    setCounter(counter + 1);
  };

  let decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={"counter-container"}>
      <button className={"action-buttons"} onClick={incrementCounter}>
        Increment (+)
      </button>
      {counter}
      <button className={"action-buttons"} onClick={decrementCounter}>
        Decrement (-)
      </button>
    </div>
  );
}

export default Counter;
