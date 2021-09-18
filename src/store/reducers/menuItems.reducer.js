//==============================================================================

/* Internal */
import menuItems from "../../utils/menuItems.data";

//==============================================================================

const initialState = {...menuItems};

var menuItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuItemsReducer;
