import { useContext } from "react";
import cartcontext from "../../store/cartcontext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartctx = useContext(cartcontext);

  const numberofCartitem = cartctx.items.reduce((currnumber, item) => {
    return currnumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartitem}</span>
    </button>
  );
};

export default HeaderCartButton;
