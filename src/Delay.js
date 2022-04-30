import React, { useState } from "react";
import "./Card.css";

const Delay = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="delay">
      <h4>Gecikme Süresi</h4>
      <div>
        <button
          onClick={() => {
            var c = count;
            c = c - 10;
            if (c >= 0) {
              setCount(c);
            }
          }}
        >
          -10
        </button>
        <button
          onClick={() => {
            var c = count;
            c = c - 1;
            if (c >= 0) {
              setCount(c);
            }
          }}
        >
          -1
        </button>
      </div>
      <div>{count}sn</div>
      <div>
        <button
          onClick={() => {
            var c = count;
            c = c + 1;
            if (c >= 0) {
              setCount(c);
            }
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            var c = count;
            c = c + 10;
            if (c >= 0) {
              setCount(c);
            }
          }}
        >
          +10
        </button>
      </div>
    </div>
  );
};

export default Delay;
