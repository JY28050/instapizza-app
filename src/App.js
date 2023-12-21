import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

/* 
We want to render the Cart component conditionally. showCartHandler should be called whenever the user clicks on the cart button. 

This button however is part of my Header- we should expect to get it from inside the Header. For the Header to call the function we need to pass a pointer through props. Let's name is onShowCart- kind of like custom events, the convention is name it "on..." whatever. 

Then we can simply point to {showCartHandler} from our props. See Header.js and HeaderCartButton for the chain of events- prop drilling.

Now another custom prop we can make can be called onClose, which points to hideCartHandler function. 


*/
