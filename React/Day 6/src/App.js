import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartprovider";

function App() {
  const [cartisShown, setcartisShown] = useState(false);

  const showCartHandler = () => {
    setcartisShown(true);
  };

  const hideCartHandler = () => {
    setcartisShown(false);
  };

  return (
    <CartProvider>
      {cartisShown &&  <Cart onhideCart={hideCartHandler}/>}
      <Header onShowcart={showCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
