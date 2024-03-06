import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = ({ onShowCart }) => {
  const cartContext = useContext(CartContext);
  const totalItemsInCart = cartContext.items.reduce((curNumber, currentItem) => {
    return curNumber + currentItem.amount;
  }, 0);
  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
