import { faBroomBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  // "fa-solid fa-broom-ball"
  return (
    <div className="landing-container">
      <div className="landing-content">
        <span className="landing-logo">
          <FontAwesomeIcon icon={faBroomBall} />
        </span>
        <h2>DuplicateCleaner</h2>
      </div>

      <form onSubmit={formSubmitHandler}>
        <InputBar input={input} setInput={setInput} showAlert={showAlert} />
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
