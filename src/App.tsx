import React, { useState } from "react";
const App : React.FC= () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount((p) => p + 1)}>
        Increment
      </button>

      <button  onClick={() => setCount((p) => p - 1)}>
        Decrement
      </button>
    </>
  );
};

export default App;