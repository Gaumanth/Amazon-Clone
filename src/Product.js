import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, rating, price, image }) => {
  const [{ basket }, dispach] = useStateValue();
  const addToBasket = () => {
    // Dispach an item to the data layer
    dispach({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="the lean startup" />
      <button onClick={addToBasket} className="product__button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
