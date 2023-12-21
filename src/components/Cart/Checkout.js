import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" required="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="number">Phone Number</label>
        <input type="text" id="number" required="number" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

/*
Adding type="button" to cancel button prevents a form submission, as we only want the Confirm button to submit a form. 
*/
