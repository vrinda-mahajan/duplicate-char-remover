import { Card } from "component";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./screen2.css";

export const Screen2 = () => {
  const { state } = useLocation();
  const [input, setInput] = useState<string>(state);

  const charArr: string[] = input.split("");
  let updatedString: string | undefined = "";

  // removes the repeated instance of the selected char except the selected one.
  const closeBtnHandler = (index: number) => {
    const char: string = charArr[index];
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

  // checks whether all characters in the string are unique or not by passing the arr into set
  const checkUniqueChars = (arr: string[]) => {
    const uniqueSet: Set<string> = new Set(arr);
    return uniqueSet.size === arr.length;
  };
  const isUnique: boolean = checkUniqueChars(charArr);

  return (
    <div className="screen2-container">
      <Link to={"/"} className="back-icon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <div className="screen2-header">
        <div>
          <p className="text-xlg">
            <b>Original String:</b> {state}
          </p>
          <p className="text-xlg">
            <b>Current String:</b> {input}
          </p>
        </div>
        <div>
          {isUnique ? (
            <span className="chip">
              <b>Success</b>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="card-container">
        {charArr.map((s: string, index: number) => (
          <Card
            key={index}
            charInfo={{ char: s, index: index }}
            closeBtnHandler={closeBtnHandler}
          />
        ))}
      </div>
    </div>
  );
};
