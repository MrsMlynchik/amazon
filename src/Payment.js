import React, { useState } from 'react';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { NumericFormat } from "react-number-format";
import {getBasketTotal} from "./reducer";
import { useEffect } from 'react';
import axios from "./axios";




const Payment = () => {
    const[{basket, user}, dispatch] =useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true) 

    useEffect(()=>{
        const getClientSecret = async() => {
            const response = await axios({
                method:"post",
                url: `/payments/create?total=${getBasketTotal(basket) *100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement),
        },
    }).then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate('/orders');
    }).catch(error => {
        console.error("Payment error:", error);
        setError(error.message);
        setProcessing(false);
    });
};

    function handleChange(e) {
        setDisabled(e.target.value === "");
        setError(e.target.validationMessage || "");
    }
    
    
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className='payment_section'>
            <div className='payment_title'>
                    <h3>Review items and delivery</h3>
            </div>
            <div className='payment_items'>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
            </div>
            <div className='payment_section'>
            <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='payment_priceContainer'>
                        <NumericFormat
                                renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                decimalScale={2}
                                />
                        

                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Proccessing</p> : "Buy Now"}</span>
                        </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment