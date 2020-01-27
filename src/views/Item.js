import React from 'react';
import Cart from './Cart';
import Description from './Description';
import Specs from './Specs';
import Performance from './Performance';
import bulb from '../assets/bulb.png'

const Item = ({id, item, description, detail, specs, perfData, price}) => {

  return (
    <div className="App-item">
        <div className="image">
          <img src={bulb} alt="bulb"></img>
        </div>
        <div className="title">
          {item}
        </div>
        <div className="description">
          {description}
        </div>
        <Cart itemId={id} item={item} price={price} currency="£"/>
        <Description 
          text={detail}
        />
        <Specs specs={specs}/>
        <Performance data={perfData} />
    </div>
  );
}

export default Item;
