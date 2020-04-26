import React from 'react';

import './checkout.styles.scss';

const CheckoutPage = () => (
  <>
    <div className='checkout-page' >
      <div className='checkout-header' >
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
    </div>
  </>
);

export default CheckoutPage;

