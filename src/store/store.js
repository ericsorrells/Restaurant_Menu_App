// ========================================================================
/* External */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Interal */
import menuItemsReducer from "./reducers/menuItems.reducer";
import userReducer from "./reducers/user.reducer";

// ========================================================================

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      menuItems: menuItemsReducer,
    }),
    composeWithDevTools(applyMiddleware())
  );

  return store;
};

export default configureStore;
