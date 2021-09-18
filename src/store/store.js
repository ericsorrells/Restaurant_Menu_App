// ========================================================================
/* External */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Interal */
import menuItemsReducer from "./reducers/menuItems.reducer";

// ========================================================================

const configureStore = () => {
  const store = createStore(
    combineReducers({
      menuItems: menuItemsReducer
    }),
    composeWithDevTools(applyMiddleware())
  );

  return store;
};

export default configureStore;
