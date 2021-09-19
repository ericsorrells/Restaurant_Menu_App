
// ========================================================================
/* Interal */
import { within } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

/* Interal */
import Menu from "./Menu";
import renderComponent from "../../utils/testingUtils";
import menuItemData from "../../utils/menuItems.data";

// ========================================================================

describe("Menu Component", () => {
  const initialState = {
    user: {admin: false},
    menuItems: {...menuItemData}
  }

  it("should contain all menu items", () => {
    const {getByText} = renderComponent(Menu, initialState);
    Object.values(menuItemData).forEach(item => {
      const row = getByText(item.title);
      const utils = within(row);
      expect(utils.getByText(item.title)).toBeInTheDocument();
    });
  });
});