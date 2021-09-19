//==============================================================================
/* Internal */
import menuItemsReducer from "../menuItems.reducer";
import {addMenuItem} from "../../actions/menuItems.actions";

//==============================================================================

describe("Menu Items Reducer", () => {
  const makeMenuItem = (args = {}) => {
    return {
      id: args.id || 1,
      title: args.title || "New Pizza",
      description: args.description || "Lorem Ipsum",
      price: args.price || 10.99,
      imageURL: args.imageURL || "http://someImage.com",
    }
  };

  describe("addMenItem", () => {
    it('adds menu item to the list', () => {
      const existingState = {
        1: makeMenuItem(),
        2: makeMenuItem({id: 2, title: "Pepperoni Pizza"})
      };
      console.log('EISTIN', existingState)


      const payload = {
        id: 3,
        title: "New Pizza",
        description: "Lorem Ipsum",
        price: 10.99,
        imageURL: "http://someImage.com",
      };

      const expectedState = {...existingState, 3: {...payload}}
      const action = addMenuItem(payload);
      const state = menuItemsReducer(existingState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
