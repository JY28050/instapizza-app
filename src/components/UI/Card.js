import classes from "./Card.module.css";

const Cards = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Cards;

//accept props.children because we need access to the wrapped content.
