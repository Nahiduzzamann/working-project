import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/24/solid'


const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;

    return (
        <div className='review-item'>
            <div className='item'>
                <img src={img}></img>
                <div className='item-descriptions'>
                    <h2>{name}</h2>
                    <p className='item-p'>Price : <span className='item-price'></span>${price}</p>
                    <p className='item-q'>Order Quantity: <span className='item-quantity'>${quantity}</span></p>
                </div>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='delete-btn'>
                <TrashIcon fill=' #EB5757' height={31} width={27} />
            </button>
        </div>
    );
};

export default ReviewItem;