
// ========================================================================
/* Interal */
import { fireEvent, within } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

/* Interal */
import Menu from "./Menu";
import renderComponent from "../../utils/testingUtils";
import menuItemData from "../../utils/menuItems.data";

// ========================================================================

describe("Menu Component", () => {
  const initialState = {
    user: { admin: false },
    menuItems: { ...menuItemData }
  }

  it("should contain all menu items", () => {
    const { getByText } = renderComponent(Menu, initialState);
    Object.values(menuItemData).forEach(item => {
      const row = getByText(item.title);
      const utils = within(row);
      expect(utils.getByText(item.title)).toBeInTheDocument();
    });
  });

  describe('Menu Dropdown', () => {
    it('shows only items from selected menu', () => {
      const selection = "dinner";
      const { getByTestId, queryByText } = renderComponent(Menu, initialState);
      fireEvent.change(getByTestId('dropdown'), { target: { value: selection } })
      Object.values(menuItemData).forEach(item => {
        if (item.menu === selection) {
          expect(queryByText(item.title)).toBeInTheDocument();
        } else {
          expect(queryByText(item.title)).not.toBeInTheDocument();
        }
      });
    });

    it('defaults to show all items', () => {
      const selection = "";
      const { getByTestId, queryByText } = renderComponent(Menu, initialState);
      fireEvent.change(getByTestId('dropdown'), { target: { value: selection } })
      Object.values(menuItemData).forEach(item => {
        expect(queryByText(item.title)).toBeInTheDocument();
      });
    });
  });
});