import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";

const Cart = ({ onClose }) => {
  return (
    <>
      <Offcanvas onClose={onClose}>
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={onClose}>
            X
          </a>
        </div>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <div className="total">
          <span>Toplam Deger:</span>
          <span>$100</span>
        </div>
        <div className="actions">
          <button className="cart-order">Siparis Ver</button>
          <button className="cart-clear">Temizle</button>
        </div>
      </Offcanvas>
    </>
  );
};

export default Cart;
