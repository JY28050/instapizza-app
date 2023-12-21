import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  //if there are even items in the cart, down there- only render the "Order" button if this is true.

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>

      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;

/*
first I need to map all the cartItems to jsx elements. At the moment we have no cart elements, so we can start with a dummy array. 

[{id: 'c1, name: 'Sushi', amount: 2, price: 14.99}].map(item => <li>{item.name}<li>) 

This will render 'Sushi' in the cart as a list item for now. Then I can go back into the <div> and point to {cartItems}

Will go back and render an <ul> around everything and add the className to style it. 

--
Refer back to App for hideCart function- here we will make a custom prop- onClick which points to {props.onClose}. Again, we named these in the App. 
Now we can close the Modal when I click the close button. But it should also be closed when the Backdrop is clicked as well. 


Finally on Modal- we can do the same as well- forward props.onClose. 

---
bind preconfigures a function for future execution. 








*/
