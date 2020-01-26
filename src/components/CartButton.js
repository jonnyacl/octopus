import React from 'react';

const CartButton = ({onClick}) => {

  return (
    <div className="cart-button">
      <button onClick={onClick}>Add to cart</button>
    </div>
  );
}

export default CartButton;
