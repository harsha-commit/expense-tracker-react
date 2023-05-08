import "./Card.css";

// Wrapper Component
function Card(props) {
  // props.children => content inside
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
