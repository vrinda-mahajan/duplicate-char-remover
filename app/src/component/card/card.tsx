import "./card.css";
import { colors } from "data/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ charInfo, closeBtnHandler }: any) => {
  console.log(charInfo, closeBtnHandler);

  const { char, index } = charInfo;
  const getColor = (char: string) =>
    colors.filter((obj) => (obj.letter === char ? obj : ""));
  let color = getColor(char);

  return (
    <div
      style={{ backgroundColor: color[0] ? color[0].bgColor : "#6d27e7" }}
      className="char-card"
    >
      <span
        onClick={() => closeBtnHandler(index)}
        className="char-card-close-btn"
      >
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <h2 className="char-card-content">{char}</h2>
    </div>
  );
};
