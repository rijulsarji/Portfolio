import "../CSS/Components CSS/achiCard.css";

function AchiCard(props) {
  return (
    <div className="achiCardBody">
      <div className="achiCardContainer">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default AchiCard;
