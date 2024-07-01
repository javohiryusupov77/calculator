import { useState } from "react";
import "./App.css";

function App() {
  const [inputvalue, setInputValue] = useState("");
  const inputHandler = (value) => {
    setInputValue(inputvalue + value);
  };
  const inputClear = () => {
    setInputValue("");
  };
  const calculate = () => {
    const result = eval(inputvalue);
    setInputValue(result);
  };
  return (
    <div className="main-container">
      <input value={inputvalue} readOnly className="input-box" />
      <div className="button-items">
        <button className="clear" onClick={inputClear}>C</button>
        <button className="clear">D</button>
        <button className="clear" onClick={() => inputHandler("%")}>%</button>
        <button onClick={() => inputHandler("/")}>/</button>

        <button onClick={() => inputHandler(1)}>1</button>
        <button onClick={() => inputHandler(2)}>2</button>
        <button onClick={() => inputHandler(3)}>3</button>
        <button onClick={() => inputHandler("*")}>x</button>

        <button onClick={() => inputHandler(4)}>4</button>
        <button onClick={() => inputHandler(5)}>5</button>
        <button onClick={() => inputHandler(6)}>6</button>
        <button onClick={() => inputHandler("-")}>-</button>

        <button onClick={() => inputHandler(7)}>7</button>
        <button onClick={() => inputHandler(8)}>8</button>
        <button onClick={() => inputHandler(9)}>9</button>
        <button onClick={() => inputHandler("+")}>+</button>

        <button onClick={() => inputHandler(0)}>0</button>
        <button onClick={() => inputHandler(".")}>.</button>
        <button onClick={calculate} className="equal">=</button>
      </div>
    </div>
  );
}

export default App;
