//==============================================================================

//==============================================================================

const initialState = { };

var menuItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "menuItems::addMenuItem":
      const { id, title, description, price, imageURL } = action.payload;
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

    case "menuItems::addMenuItems":
      return {
        ...state,
        ...action.payload
      }

    case "menuItems::deleteMenuItem":
      return Object.values(state).filter(item => item.id !== action.id);

    case 'menuItems::editMenuItem':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.payload
        }
      }

    default:
      return state;
  }
};

export default menuItemsReducer;
