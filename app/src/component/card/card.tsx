import "./card.css";

export const Card = ({charInfo,closeBtnHandler}: any) => {
    console.log(charInfo,closeBtnHandler)
    const {char,index} = charInfo;
  return (
    <div className="char-card">
      <span onClick={()=>closeBtnHandler(index)} className="char-card-close-btn">X</span>
      <h2 className="char-card-content">{char}</h2>
    </div>
  );
};
