import React from 'react';

const Quantity = ({count, onAdd, onMinus}) => {

  return (
    <div className="quantity">
      <div className="qty">QTY</div>
      <button className="qtyChange" onClick={onMinus}>-</button>
      <div className="count">{count}</div>
      <button className="qtyChange" onClick={onAdd}>+</button>
    </div>
  );
}

export default Quantity;
