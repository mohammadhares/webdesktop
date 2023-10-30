import React, { useState } from 'react';
import './style.css';
import OperationResult from './OperationResult';
import KeyPad from './KeyPad';
import { evaluate } from 'mathjs'; // Import the evaluate function from math.js

const CalculatorHome: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onClick = (button: string) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult((prevResult) => prevResult + button);
    }
  };

  const calculate = () => {
    try {
      setResult(evaluate(result) + ""); // Use math.js evaluate function
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  return (
    <div>
      <div className="calculator-body">
        <OperationResult result={result} />
        <KeyPad onClick={onClick} />
      </div>
    </div>
  );
};

export default CalculatorHome;
