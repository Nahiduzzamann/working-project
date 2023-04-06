import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../asset/utilities/fakedb';
import { TrashIcon } from '@heroicons/react/24/solid'


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(item => item.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to={"/checkout"} style={{textDecoration:'none',}}>
                    <button
                        className='check-out-btn'>
                        <span>Proceed Checkout</span>
                    </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;