import { InputBar } from "component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./screen1.css";

export const Screen1 = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    const trimmedString = input.replace(/\s/g, "");
    trimmedString === ""
      ? setShowAlert(true)
      : navigate("/screen2", { state: trimmedString });
    setInput("");
  };
  
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <InputBar input={input} setInput={setInput} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {showAlert ? (
          <div className="alert alert-error">
            Enter a valid input.
          </div>
        ) : (
          ""
        )}
      </form>
    </>
  );
};
