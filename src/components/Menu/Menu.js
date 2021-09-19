// ========================================================================
/* External */
import React from 'react';
import { useSelector } from 'react-redux'

/* Interal */
import MenuItem from '../MenuItem/MenuItem';

// ========================================================================

const Menu = () => {
  const menuData = useSelector((state) => state.menuItems);
  const menuItems = Object.values(menuData).map(item => {
    return (
      <React.Fragment key={item.id}>
        <MenuItem item={item} />
      </React.Fragment>
    )
  });

  return (
    <div className="Menu__container" data-testid="menu">
      {menuItems}
    </div>
  )
}

export default Menu;
