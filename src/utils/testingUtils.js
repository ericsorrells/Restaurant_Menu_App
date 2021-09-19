//==============================================================================
/*** Dependencies (external, internal, component, local, stubs, under test) ***/

/* External */
import React from "react";
import {createStore} from "redux";
import {render as rtlRender} from "@testing-library/react";
import {Provider} from "react-redux";

/* Internal */
import rootReducer from "../store/reducers/root.reducer";
//==============================================================================

function render(
  ui,
  {initialState, store = createStore(rootReducer, initialState), ...renderOptions} = {},
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from "@testing-library/react";
export {render};
