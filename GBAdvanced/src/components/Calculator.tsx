import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("0");

  const updateInput = (value: string) => {
    setInput((prev) => {
      if (prev === "0" || prev === "Error") {
        return value;
      }
      return prev + value;
    });
  };

  const clearInput = () => {
    setInput("0");
  };

  const deleteLast = () => {
    setInput((prev) => {
      if (prev === "Error" || prev.length <= 1) {
        return "0";
      }
      return prev.slice(0, -1);
    });
  };

  const appendDecimal = () => {
    if (input === "Error") {
      setInput("0.");
      return;
    }

    const parts = input.split(/([+\-*/])/);
    const current = parts[parts.length - 1];

    if (!current.includes(".")) {
      setInput((prev) => prev + ".");
    }
  };

  const handlePercent = () => {
    try {
      // eslint-disable-next-line no-eval
      const value = eval(input) / 100;
      setInput(String(value));
    } catch {
      setInput("Error");
    }
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__panel">
        <div className="calculator__title">
          <span>GBAdvanced</span>
          <small>Smart calculator</small>
        </div>
        <div className="display" aria-label="Calculator display">
          {input}
        </div>
      </div>

      <div className="pad">
        <button className="function" onClick={clearInput}>
          AC
        </button>
        <button className="function" onClick={deleteLast}>
          DEL
        </button>
        <button className="function" onClick={handlePercent}>
          %
        </button>
        <button className="operator" onClick={() => updateInput("/")}>
          ÷
        </button>

        <button onClick={() => updateInput("7")}>7</button>
        <button onClick={() => updateInput("8")}>8</button>
        <button onClick={() => updateInput("9")}>9</button>
        <button className="operator" onClick={() => updateInput("*")}>
          ×
        </button>

        <button onClick={() => updateInput("4")}>4</button>
        <button onClick={() => updateInput("5")}>5</button>
        <button onClick={() => updateInput("6")}>6</button>
        <button className="operator" onClick={() => updateInput("-")}>
          −
        </button>

        <button onClick={() => updateInput("1")}>1</button>
        <button onClick={() => updateInput("2")}>2</button>
        <button onClick={() => updateInput("3")}>3</button>
        <button className="operator" onClick={() => updateInput("+")}>
          +
        </button>

        <button className="zero" onClick={() => updateInput("0")}>
          0
        </button>
        <button onClick={appendDecimal}>.</button>
        <button className="equal" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
