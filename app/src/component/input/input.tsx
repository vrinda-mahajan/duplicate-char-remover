import "./input.css";

type InputProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const InputBar = ({ input, setInput }: InputProps) => {
  return (
    <div className="input-container">
      <label className="input-label">Enter Input</label>
      <input
        className="input-field"
        value={input}
        placeholder="Enter text"
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
    </div>
  );
};
