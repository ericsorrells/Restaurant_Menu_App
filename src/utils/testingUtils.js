//==============================================================================
/* External */
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

//==============================================================================

const renderComponent = (Component, initialState, props = {}) => {
  const mockStore = configureStore();
  return render(
    <Provider store={mockStore(initialState)}>
      <Component {...props}/>
    </Provider>
  )
}

export default renderComponent;
