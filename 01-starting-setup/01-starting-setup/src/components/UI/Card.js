import "./Card.css";

function Card(dataz) {
  const classes = "card " + dataz.className;
  return <div className={classes}>{dataz.children}</div>;
}

export default Card;
