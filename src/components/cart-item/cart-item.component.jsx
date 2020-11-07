import React from 'react';

import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl, price, name, calories, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="cart item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x &#x20B9;{price}
      </span>
      <span className="calories">
        {quantity} x {calories} kcal
      </span>
    </div>
  </div>
);

export default CartItem