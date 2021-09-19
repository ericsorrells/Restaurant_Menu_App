//==============================================================================

/* Internal */
import menuItems from "../../utils/menuItems.data";

//==============================================================================

const initialState = {...menuItems};

var menuItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "menuItems::addMenuItem":
      const {id, title, description, price, imageURL} = action.payload;
      return {
        ...state,
        [id]: {
          id,
          title,
          description,
          price,
          imageURL
        }
      }
    case "menuItems::deleteMenuItem":
      return Object.values(state).filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default menuItemsReducer;
