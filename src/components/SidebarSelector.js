import React from 'react';

const SidebarSelector = ({showSidebar, onClick}) => {
  if (showSidebar) {
    return (
        <div className="sidebar" onClick={onClick}>
          X
        </div>
      );
  }
  return (
    <div className="sidebar" onClick={onClick}>
      <div className="clicker"></div>
      <div className="clicker"></div>
      <div className="clicker"></div>
    </div>
  );
}

export default SidebarSelector;
