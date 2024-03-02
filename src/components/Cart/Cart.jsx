import "./Cart.css";

const Cart = () => {
  return (
    <div className="offcanvas">
      <div className="content">
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/">X</a>
        </div>
        Cart Items
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
