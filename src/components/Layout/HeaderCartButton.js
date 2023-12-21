import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  //bump class- for button animation- should play whenever cart changes, which we need useEffect.

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

//reduce() transforms array of data to single value

/*
{props.onClick}- the onClick prop here is not up to us, trace the onClick prop back to Header.js and follow the chain of events from Header => app. Alittle bit of prop drilling is ok. 

Start off by passing useContext(cartContext) and putting it in a const called cartCtx- now we have access. 

We can now use this to output the number of cart items. Add another const- numberOfCartItems, and here we want to get access to cartCtx.items

//EX: if we order 3 deep dish pizzas- I want to add 1 item to the cart item's array, but set the amount to 3, so we can't use items.length.

The proper way to derive number of items- cartCtx.items.reduce(). Reduce is a built in method that allows us transform an array of data into a single number. Takes 2 arguments. First argument is a function, second is a starting value, which we will use 0. 

First function receives 2 arguments itself. (curNumber, item). 



*/
