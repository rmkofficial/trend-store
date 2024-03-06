import { useContext } from "react";
import Card from "../UI/Card";
import "./ProductItem.css";
import Rating from "./Rating";
import { CartContext } from "../../context/CartProvider";

const ProductItem = ({ product }) => {
  const { items, addItem, totalAmount } = useContext(CartContext);
  return (
    <Card>
      <img src={product.img} alt={product.name} />
      <h3 className="product-title">{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">${product.price}</span>
      </div>
      <button className="add-to-cart" onClick={() => addItem(product)}>
        Sepete Ekle
      </button>
    </Card>
  );
};

export default ProductItem;
