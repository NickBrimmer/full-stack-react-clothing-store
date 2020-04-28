import React from 'react';



import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/selectors/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => (
  <>
    <div className='checkout-page' >
      <section className='checkout-header' >
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </section>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total' >
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning' >
        **Please use the following test credit card number for trial payment.** <br/><br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123 <br/><br/>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  </>
);


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);

