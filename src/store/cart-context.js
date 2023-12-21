import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;

/*
addItem receives the item that should be added. 
removeItem receives the id that identifies the item that should be removed from the cart. 

All stored in a cartContext const. We have a general context created now, but we still need to manage this in some other component with useState so that this context can change and update the application over time. 



*/