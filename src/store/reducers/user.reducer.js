//==============================================================================

/* Internal */

//==============================================================================

const initialState = {
  admin: false
};

var userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user::setAdmin":
      return {
        ...state,
        admin: true
      }
    default:
      return state;
  }
};

export default userReducer;
