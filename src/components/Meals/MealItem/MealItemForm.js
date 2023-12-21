import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    //convert from string to num with the +

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
      //check if there is no value, or if value is smaller than one or less than 5- if either condition is met, return and not continue with function execution. If I try and add for example 7 to the input field, I will get the <p> please enter valid amount </p> error message down below.
    }

    props.onAddToCart(enteredAmountNumber);
    //forward enteredAmountNumber- cart item which I want to add needs more data than just the entered amount- we don't have name, id, or price in here. That is why I'm not calling context method here. Look for this in MealItem. 
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount" //this prop is what shows up in our Input.js
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

/*The form is what will appear on the right- for adding the meals into cart. 

--
We want to make sure our addItemToCartHandler is being called- from our CartProdiver.js 

There we want to handle the form submission, and we want to add the item to cart. First step is to make a submitHandler function, which we get the event object. 

Call submitHandler using onSubmit={} on the Form. 
First in the submitHandler- call event.preventDefault() to prevent page reload. 



*/
