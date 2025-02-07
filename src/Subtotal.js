import React from 'react';
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';


const Subtotal = () => {
  const navigate = useNavigate();
    const[{basket}, dispatch] =useStateValue();
    const getBasketTotal = (basket) => 
      basket?.reduce((amount, item) => amount + item.price, 0);
  

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    };
  
    const basketTotal = getBasketTotal(basket);
    const handleCheckout = () => {
      navigate('/payment');
  };
    return (
      <div className='subtotal'>
        <p>
          Subtotal ({basket?.length || 0} items): <strong>{formatCurrency(basketTotal)}</strong>
        </p>
        <small className='subtotal_gift'>
          <input type="checkbox" /> This order contains a gift
        </small>
        <button onClick={handleCheckout}>
            Proceed to Checkout
        </button>
      </div>
    );
  };
  
  export default Subtotal;
  