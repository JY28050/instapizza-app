import React from 'react'


import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;


/*
start off with <div> give it the class for styling, then a label to show the text, and finally the input itself.

The label text should be configurable-{props.label}- what we named it. 

When this component is getting used, I expect a label prop with the text, and the input prop with the object that has configuration data for the input ( like the id which we add).

Now we can use spread operator to get all other configuration data to input element. {...props.input} ensures that all the key-value pairs in this object which we recieved on props.input are added.

To make this clearer look at MealItemForm.js where our Input component is to see all the different props that are passed onto this page. 

*/