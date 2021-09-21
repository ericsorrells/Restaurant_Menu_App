// ========================================================================
/* External */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// ========================================================================

const useCreateMenuItemHooks = () => {
  const dispatch = useDispatch();
   const menuItems = useSelector(state => state.menuItems);
   const [inputState, setInputState] = useState({
     title: "",
     description: "",
     price: 0,
     imageURL: ""
   })

   return {
    dispatch,
    inputState,
    setInputState,
    menuItems,
   }
}

export default useCreateMenuItemHooks;
