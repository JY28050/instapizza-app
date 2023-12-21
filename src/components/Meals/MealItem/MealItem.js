import { useContext } from 'react'

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)


  const price = `$${props.price.toFixed(2)}`;
  //toFixed(2) make sure we render 2 decimal places. Then we render it down there {price}. 

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }
  //addItem from cartProvider- in our cartContext object. Calling that function here, we expect to get the item which we forward to the reducer. Create new object on the fly. 

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

/*Firstly we want to render it all in a list item. Now for the <h3>, I need to access props.name. Same with all the other elements. Then add the styling to them. Remember, the prop names (name, description, price) is what we gave it back in AvailableMeals. 

Now for price, we don't want to just add it like props.price- instead let's create a const above that formats the price a bit more. 

const price takes a template literal- first a hardcoded dollar sign- the dynamic content is props.price.toFixed(2), which ensures we always render 2 decimal places. Then we can just output price back down in the <div>

Then the final <div> in the <li> we want to render a simply form <MealItemForm>. We want it in a separate component so all the form markup isn't bloating this one. 








*/