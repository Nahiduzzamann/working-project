import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const {}=props
    // console.log(cart);
    let totalPrice = 0;
    let shippingCost = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shippingCost = shippingCost + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+shippingCost+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shippingCost}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total ${grandTotal}</h6>

        </div>
    );
};

export default Cart;