// ========================================================================
/* External */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

/* Interal */
import MenuItem from '../MenuItem/MenuItem';

// ========================================================================

const Menu = () => {
  const [menuType, setMenuType] = useState("")
  const menuData = useSelector(state => {
    if (!menuType) return state.menuItems;
    return Object.values(state.menuItems).filter((item) => item.menu === menuType)
  });
  const dispatch = useDispatch();

  const handleSelection = (e) => {
    const selection = e.target.value;
    setMenuType(selection)
  };

  const menuItems = Object.values(menuData).map(item => {
    return (
      <React.Fragment key={item.id}>
        <MenuItem item={item} dispatch={dispatch} />
      </React.Fragment>
    )
  });

  return (
    <div className="Menu__container" data-testid="menu">
      <div className="Menu__selectContainer">
        <select value={menuType} onChange={handleSelection}>
          <option disabled selected value=''>Select A Menu</option>
          <option value="">All Dishes</option>
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
        </select>
      </div>
      <div className="Menu__list">
        {menuItems}
      </div>
    </div>
  )
}

export default Menu;
