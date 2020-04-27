import React from 'react';

import {connect} from 'react-redux';
import {clearItemFromCart, addItem, decrementCartItem} from '../../redux/cart/cart.actions';

import './checkout-item.scss';


const CheckoutItem = ({cartItem, clearItem, addItem, decrementItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container' >
        <img src={imageUrl} alt="item" />
      </div>
      <span className='name' >{name}</span>

      <span className='quantity' >
        <div className='arrow' onClick={() => decrementItem(cartItem)} >&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)} >&#10095;</div>
      </span>


      <span className='price' >${price}</span>
      <div className='remove-button'
        onClick={() => clearItem(cartItem)}
      > &#10005;</div>
    </div>
  )
};

const mapDispatchToProp = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  decrementItem: item => dispatch(decrementCartItem(item))

})

export default connect(null, mapDispatchToProp)(CheckoutItem);

