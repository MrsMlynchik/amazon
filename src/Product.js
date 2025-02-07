import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,       
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <div className="product_title">
          <p>{title}</p>
        </div>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>✨</p>
          ))}
        </div>
      </div>
      <img src={image} alt={title} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
