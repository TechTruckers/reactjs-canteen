import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal, selectCartTotalCalories } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total, totalCalories}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Item</span>
      </div>

      <div className="header-block">
        <span>Name</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price (in &#x20B9;)</span>
      </div>

      <div className="header-block">
        <span>Calories (in kcal)</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
    cartItems.map(cartItem =>
        (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        )
    }
    <div className='total'>
        <span>Total Price: &#x20B9;{total}</span>
    </div>
    <div className='total'>
        <span>Total Calories: {totalCalories}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    totalCalories: selectCartTotalCalories
})

export default connect(mapStateToProps)(CheckoutPage);