import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/selectors/cart.selectors';
import {createStructuredSelector} from 'reselect';


import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {
        cartItems.lenth ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : <span className='empty-cart'>Your Cart Is Empty</span>
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);
