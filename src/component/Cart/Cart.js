import React from 'react';
import './Cart.css';
import { TrashIcon } from '@heroicons/react/24/solid'


const Cart = ({ cart ,handleClearCart}) => {
    // const {}=props
    // console.log(cart);
    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shippingCost + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shippingCost}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total ${grandTotal}</h6>
            <button onClick={handleClearCart} className='order-summary-clr-btn'>
                <span>Clear Cart</span>
                <TrashIcon fill=' #ffffff' height={28} width={25} />
            </button>
            <button
                className='check-out-btn'>
                <span>Proceed Checkout</span>
                <TrashIcon fill=' #ffffff' height={28} width={25} />
            </button>
        </div>
    );
};

export default Cart;