import "../components/SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card back" />
        <img
          className="back"
          src="../img/cover.png"
          alt="card front"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
