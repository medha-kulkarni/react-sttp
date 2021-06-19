import React, { useRef, useState } from "react";
import "./CounterUsingRef.css";

function CounterUsingRef() {
  const counterRef = useRef(0);
  const [, forceRenderer] = useState(false)

  let incrementCounter = () => {
    counterRef.current = counterRef.current + 1;
    forceRenderer((x) => !x)
    console.log(counterRef);
  };

  let decrementCounter = () => {
    counterRef.current = counterRef.current - 1;
    forceRenderer((x) => !x)
    console.log(counterRef);
  };

  return (
    <div className={"counter-container"}>
      <button className={"action-buttons"} onClick={incrementCounter}>
        Increment (+)
      </button>
      {counterRef.current}
      <button className={"action-buttons"} onClick={decrementCounter}>
        Decrement (-)
      </button>
    </div>
  );
}

export default CounterUsingRef;
