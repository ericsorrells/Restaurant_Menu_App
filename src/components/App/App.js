// ========================================================================
/* External */
import React, {useEffect} from 'react';
import { Provider } from 'react-redux';

/* Interal */
import AppRouter from '../../router/AppRouter';
import configureStore from '../../store/store';
import { setAdmin } from '../../store/actions/user.actions';
import { addMenuItems } from "../../store/actions/menuItems.actions";
import menuItems from "../../utils/menuItems.data";
import "../../styles/_styles.scss";

// ========================================================================

const store = configureStore();

const App = () => {
  useEffect(() => {
    if (window.location.search.includes("admin=true")) {
      store.dispatch(setAdmin())
    }
    store.dispatch(addMenuItems(menuItems))
  }, [])

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
};

export default App;
