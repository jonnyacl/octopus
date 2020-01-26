import React, { useState } from 'react';

const Expandable = ({element, showInitial}) => {

  const [expanded, setExpanded] = useState(showInitial);

  return (
    <div className={expanded ? "expandable" : "expandable-collapsed"}>
        <div>{element}</div>
        <div className="show-more" onClick={() => {setExpanded(!expanded)}}>{expanded ? "Show less" : "Show more"}</div>
    </div>
  );
}

export default Expandable;
