import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";

const Cart = ({ onClose }) => {
  return (
    <div className="offcanvas">
      <div className="content">
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
      </div>
    </div>
  );
};

export default Cart;
