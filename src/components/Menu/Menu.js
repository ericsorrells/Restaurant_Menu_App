// ========================================================================
/* External */
import React from 'react';

/* Interal */
import MenuItem from '../MenuItem/MenuItem';
import useMenuHooks from './MenuHooks';

// ========================================================================

const Menu = () => {
  const {
    dispatch,
    menuData,
    menuType,
    setMenuType,
  } = useMenuHooks()

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
        <select value={menuType} onChange={handleSelection} data-testid="dropdown">
          <option disabled defaultValue value=''>Select A Menu</option>
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
