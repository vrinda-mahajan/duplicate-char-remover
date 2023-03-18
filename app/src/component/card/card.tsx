import "./card.css";
import { colors } from "data/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ charInfo, closeBtnHandler }: any) => {
  const { char, index } = charInfo;

  // to get color info from colors array
  const getColorInfo = (char: string) =>
    colors.filter((obj) => (obj.letter === char ? obj : ""));
  let color = getColorInfo(char);

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
