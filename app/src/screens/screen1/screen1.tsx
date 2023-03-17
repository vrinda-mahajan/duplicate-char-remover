import "./screen1.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// form
export const Screen1 = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="input-container">
        <label className="input-label">Enter Input</label>
        <input
          className="input-field"
          value={input}
          placeholder="Enter text"
          onChange={(e) => {
            console.log(input);
            setInput(e.target.value);
          }}
          type="text"
        />
      </div>
      <Link to="/screen2" state={input}>
        <button className="btn btn-primary">Submit</button>
      </Link>
    </>
  );
};
