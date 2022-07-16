import React, { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="item">
      {count}
      <button className="btn" onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
};

export default SimpleCounter;
