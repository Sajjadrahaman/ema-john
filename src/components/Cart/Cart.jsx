import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;}
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        // quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4 className='CartHeader'>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className='Grand-Total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;