import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    //checking if an item is already part of the cart so no duplicates (ex: deep dish x1, deep dish x2 instead of having it all collapse into one deep dish x3.)
    
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );


  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

/*Goal for this component: manage cart context data- provide that context to all components that want access to it.

Wrapping CartContext.Provider then pointing to props.children lets us have access, and we can also add the logic to managing the context to this component. 

Add cartContext help object- all the fields we set up. Need to set up value prop and point to cartContext. Then every other component can have access. 

Every component that needs access must be wrapped- going back to our App. 


--
useReducer- more complex state. Need to check if a meal is already part of the cart.   

(state, action) automatically given by react. The "action" is dispatched by you later, and the state is simply the last state snapshot of the state managed by the reducer. 

As part of the reducer you need to return a new state snapshot. 

Outside I will define defaultCartState- will be an object, with an empty Item erray and totalAmount is 0. I will return this const inside cartReducer. 

Inside CartProvider we can call useReducer() and as a first argument we point at our Reducer function, and we set an intial state which is the defaultCartState. 

dispatchCartAction is name up to us. 

Now back in the cartContext- instead of hardcoding an empty array, we will now change items: cartState.items. Because we now managing items with state. Same with totalAmount. 

Now we can start dispatching actions. In the addItemToCartHandler function, we can call dispatchCartAction(). It's totally up to you what an action is, could be a number or text- typically it's an object with properties that allow you to identify that action inside of your reducer function. 

dispatchCartAction({type: 'ADD', item:item})   type is what we name it. All Caps string also standard convention. Now to add the item to the reducer function, we also need to forward the item, so the second property is item. Again name is up to us. Do same for removeItemCartHandler. 

Now in cartReducer we can start with if statement- if the action.type is the same as 'ADD' then we want to run the action logic. I want to update my cart items. We can create an array name is updatedItems set it equal to state.items (current state snapshot) and call concat().

concat() is a built in js method that adds a new item to the array. Unlike push() it doesn't edit the existing array, but returns a new array.

You want to update your state in a way that doesn't edit your old state snapshot. You want to generate a brand new state object that you return. 

concat(action.item)- I expect to have all the data I need on that action.item- the name, the amount, the price. 

With that we get the updated items, I also want the updatedTotalAmount. Which should be the old total amount in the state snapshot- state.totalAmount + action.item.price * action.item.amount. I expect to have an amount and price field, and if we multiply those 2 we know how much are total amount needs to change. Now we can return our new state. 

items: updatedItems, totalAmount: updatedTotalAmount. 

--

findIndex- built in method, finds the index of an item in an array. Takes a function and should return true if that's the item we are looking for, and false otherwise. I want to return true if item.id is === action.item.id. If the item we are currently looking at in the array has the same id as the action that was dispatched. Will return the index of that item if it exist. 









*/
