import React from 'react';
import Expandable from '../components/Expandable';

const Description = ({text}) => {

  return (
    <div className="App-item-description">
        <div className="heading">Description</div>
        <Expandable className="App-item-description-content" element={text} showInitial={false}/>
    </div>
  );
}

export default Description;
