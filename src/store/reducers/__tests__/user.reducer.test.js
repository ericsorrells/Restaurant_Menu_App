//==============================================================================
/* Internal */
import userReducer from "../user.reducer";
import {setAdmin} from "../../actions/user.actions";

//==============================================================================

describe("User Reducer", () => {

  describe("setAdmin", () => {
    it('sets the admin status', () => {
      const existingState = {admin: false};
      const expectedState = {admin: true};
      const action = setAdmin();
      const state = userReducer(existingState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
