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
    default:
      return state;
  }
};

export default menuItemsReducer;
