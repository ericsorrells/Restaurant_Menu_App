
// ========================================================================
/* Interal */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux'

/* Interal */
import Menu from "./Menu";
import menuItemData from "../../utils/menuItems.data";

// ========================================================================

describe("Menu Component", function () {
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue({ ...menuItemData })

  it("should contain all menu items", () => {
    render(<Menu />);
    Object.values(menuItemData).forEach(item => {
      const row = screen.getByText(item.title);
      const utils = within(row);
      expect(utils.getByText(item.title)).toBeInTheDocument();
    });
  });
});