import "./input.css";

type InputProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  showAlert: boolean;
};

export const InputBar = ({ input, setInput, showAlert }: InputProps) => {
  return (
    <div className="input-container">
      <label
        className={showAlert ? "input-error-label input-label" : "input-label"}
      >
        Enter Input
      </label>
      <input
        className={showAlert ? "input-error-field input-field" : "input-field"}
        value={input}
        placeholder="Enter text"
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      {showAlert ? (
        <span className="validation-error">Enter a valid input.</span>
      ) : (
        <></>
      )}
    </div>
  );
};
