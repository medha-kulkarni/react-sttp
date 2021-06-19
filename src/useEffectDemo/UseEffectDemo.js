import React, { useState, useEffect } from "react";

function UseEffectDemo() {
  const [toogleState, setToogleState] = useState(false);
  const [newToogleState, setNewToogleState] = useState(false);

  useEffect(() => {
      // Use effect called every time when toogleState or newToggleState gets called
    console.log("UseEffect called.");
  }, [toogleState, newToogleState]);

//   useEffect(() => {
//     // Use effect called only once when component is mounted on DOM
//   console.log("UseEffect called.");
// }, []);

// useEffect(() => {
//     // Use effect called every time whenever any of the state changes in the component
//   console.log("UseEffect called.");
// });

  return (
    <div>
      <button onClick={() => setToogleState((x) => !x)}>Toogle Button</button>
      <button onClick={() => setNewToogleState((x) => !x)}>
        New Toogle Button
      </button>
    </div>
  );
}

export default UseEffectDemo;
