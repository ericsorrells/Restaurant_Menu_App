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
      return Object.keys(state).reduce((accumulator, key) => {
        key = parseInt(key);
        if (key !== action.id) {
          accumulator[key] = state[key]
        }
        return accumulator
      }, {})

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
