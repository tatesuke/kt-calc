import "./App.css";
import { useState } from "react";

type Operator = "＋" | "－" | "✕" | "÷";

function App() {
  const [number1, setNumber1] = useState<number | undefined>();
  const [number2, setNumber2] = useState<string | undefined>();
  const [operator, setOperator] = useState<Operator | undefined>();

  function calc(): number {
    if (!operator) {
      return parseFloat(number2!);
    }
    if (operator === "＋") {
      return (number1 ?? 0) + parseFloat(number2!);
    }
    if (operator === "－") {
      return (number1 ?? 0) - parseFloat(number2!);
    }
    if (operator === "✕") {
      return (number1 ?? 0) * parseFloat(number2!);
    }
    if (operator === "÷") {
      return (number1 ?? 0) / parseFloat(number2!);
    }
    throw new Error("unknow operator");
  }

  function addNumber(n: string) {
    if (number2 === undefined || number2 === "0") {
      setNumber2(n);
    } else {
      setNumber2(number2 + n);
    }
  }

  function addDot() {
    let nextNumber = number2 ?? "0";
    if (nextNumber.indexOf(".") === -1) {
      nextNumber += ".";
    }
    setNumber2(nextNumber);
  }

  function selectOperator(o: Operator) {
    if (number2 !== undefined) {
      const answer = calc();
      setNumber1(answer);
    }
    setNumber2(undefined);
    setOperator(o as Operator);
  }

  function doEquals() {
    if (number2 !== undefined) {
      const answer = calc();
      setNumber1(answer);
    }
    setNumber2(undefined);
    setOperator(undefined);
  }

  function clear() {
    setNumber2(undefined);
  }

  function clearAll() {
    setNumber1(0);
    setNumber2(undefined);
    setOperator(undefined);
  }

  return (
    <div className="App">
      <div className="App__display">
        <div className="Display">
          <div className="Display__answer">
            {number1 ?? "　"} {operator ?? "　"}
          </div>
          <div className="Display__number">
            {number2 ?? (!operator ? number1 ?? "　" : "　")}
          </div>
        </div>
      </div>
      <div className="App_keypad">
        <div className="KeyPad">
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("7");
            }}
          >
            7
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("8");
            }}
          >
            8
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("9");
            }}
          >
            9
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--all-clear"
            onClick={() => {
              clearAll();
            }}
          >
            AC
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--clear"
            onClick={() => {
              clear();
            }}
          >
            C
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("4");
            }}
          >
            4
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("5");
            }}
          >
            5
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("6");
            }}
          >
            6
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--operator"
            onClick={() => {
              selectOperator("✕");
            }}
          >
            ✕
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--operator"
            onClick={() => {
              selectOperator("÷");
            }}
          >
            ÷
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("1");
            }}
          >
            1
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("2");
            }}
          >
            2
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("3");
            }}
          >
            3
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--operator"
            onClick={() => {
              selectOperator("＋");
            }}
          >
            ＋
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--operator"
            onClick={() => {
              selectOperator("－");
            }}
          >
            －
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("00");
            }}
          >
            00
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addNumber("0");
            }}
          >
            0
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--number"
            onClick={() => {
              addDot();
            }}
          >
            .
          </button>
          <button
            className="KeyPad__cell KeyPad__cell--equals"
            onClick={() => {
              doEquals();
            }}
          >
            ＝
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
