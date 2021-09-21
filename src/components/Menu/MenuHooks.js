// ========================================================================
/* External */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// ========================================================================

const useMenuHooks = () => {
  const [menuType, setMenuType] = useState("");
  const menuData = useSelector(state => {
    if (!menuType) return state.menuItems;
    return Object.values(state.menuItems).filter((item) => item.menu === menuType)
  });
  const dispatch = useDispatch();

  return {
    dispatch,
    menuData,
    menuType,
    setMenuType,
  }
}

export default useMenuHooks;
