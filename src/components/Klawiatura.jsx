import React from "react";
import "../styles/Klawiatura.css";
function Klawiatura({ przycisk }) {
  return (
    <div id="kl-1">
      <button id="AC" className="span-two" onClick={przycisk}>
        AC
      </button>
      <button id="DEL" onClick={przycisk}>
        DEL
      </button>
      <button onClick={przycisk}>÷</button>
      <button onClick={przycisk}>1</button>
      <button onClick={przycisk}>2</button>
      <button onClick={przycisk}>3</button>
      <button onClick={przycisk}>*</button>
      <button onClick={przycisk}>4</button>
      <button onClick={przycisk}>5</button>
      <button onClick={przycisk}>6</button>
      <button onClick={przycisk}>+</button>
      <button onClick={przycisk}>7</button>
      <button onClick={przycisk}>8</button>
      <button onClick={przycisk}>9</button>
      <button onClick={przycisk}>-</button>
      <button onClick={przycisk}>.</button>
      <button onClick={przycisk}>0</button>
      <button onClick={przycisk} className="span-two">
        =
      </button>
    </div>
  );
}
export default Klawiatura;
