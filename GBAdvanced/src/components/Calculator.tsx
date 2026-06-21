// FIXED: removed unused `React` import because it's not referenced (modern JSX transform)
// import React, { useState } from "react";
import { useState } from "react";
// FIXED/ADDED: import styles for the calculator UI
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  // FIXED: corrected arrow function syntax (was: "const handleClick = (value) = >{" )
  // const handleClick = (value) = >{
  //   setInput(input+value);
  // }
  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  // FIXED: implemented calculateResult which previously was malformed
  // const calculateResult = ()={
  //   try {}
  // }
  const calculateResult = () => {
    try {
      // NOTE: using eval for simplicity — keep input sanitized in production
      // Evaluate the expression and show the result
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch (e) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="pad">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button className="clear" onClick={clearInput}>
          C
        </button>
        {/* FIXED: was calling undefined `calculate` handler; now calls `calculateResult` */}
        <button className="equal" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
