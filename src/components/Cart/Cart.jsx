import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCardAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart }) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        //Shortcut For Quantity Issue
        //----Option-1-----
        /* if(product.quantity === 0){
            product.quantity = 1;
        } */
        //----Option-2----
        // product.quantity = product.quantity || 1; 

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4 className='CartHeader'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className='Grand-Total'>Grand Total: ${grandTotal.toFixed(2)}</h6>

            <div className='btnCart-checkOut'>
                <button onClick={handleClearCart} className='btnClear-checkOut'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>

                <button className='btnClear-checkOut'
                    style={{ backgroundColor: "#FF9900" }}>
                    <span>Proceed Checkout</span>
                    <FontAwesomeIcon icon={faCreditCardAlt} />
                </button>
            </div>
        </div>
    );
};

export default Cart;