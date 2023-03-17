import { Card } from "component";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./screen2.css";

export const Screen2 = () => {
  const { state } = useLocation();
  const [input, setInput] = useState(state);
  console.log(state.split(""));

  const charArr = input.split("");
  let updatedString = "";

  const closeBtnHandler = (index: number) => {
    const char = charArr[index];
    updatedString = "";
    for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] !== char) {
        updatedString += charArr[i];
      } else {
        if (i === index) {
          updatedString += charArr[i];
        }
      }
    }
    setInput(updatedString);
  };

  const checkUniqueChars = (arr: any) => {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  };
  const isUnique = checkUniqueChars(charArr);

  return (
    <>
      <h1>Hello screen 2</h1>
      {isUnique ? (
        <span className="chip">
          Success
        </span>
      ) : (
        ""
      )}
      <p>Original String: {state}</p>
      <p>Current String: {input}</p>

      <div className="card-container">
        {charArr.map((s: string, index: number) => (
          <Card
            key={index}
            charInfo={{ char: s, index: index }}
            closeBtnHandler={closeBtnHandler}
          />
        ))}
      </div>
    </>
  );
};
