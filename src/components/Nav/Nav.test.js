
// ========================================================================
/* Interal */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

/* Interal */
import Nav from "./Nav";

// ========================================================================

describe("Nav Component", () => {
  const renderNav = () => {
    return render(
      <MemoryRouter>
        <Nav/>
      </MemoryRouter>
    );
  }

  describe('When Not Admin', () => {
    const spy = jest.spyOn(redux, 'useSelector');

    it('will display link to menu page', () => {
      spy.mockReturnValue(false);
      renderNav();
      const nav = screen.queryByTestId("nav");
      const mainPageLink = screen.queryByText("Eric's Pizza Palace");

      expect(nav).toContainElement(mainPageLink);
      expect(mainPageLink).toHaveAttribute('href', '/');
    });

    it('will not display link to add menu items', () => {
      spy.mockReturnValue(false);
      renderNav();
      const nav = screen.queryByTestId("nav");
      const createMenuItemLink = screen.queryByText("Add Menu Item");

      expect(nav).not.toContainElement(createMenuItemLink);
    });
  });

  describe('When Admin', () => {
    const spy = jest.spyOn(redux, 'useSelector');

    it('will display link to menu page', () => {
      spy.mockReturnValue(true);
      renderNav();
      const nav = screen.queryByTestId("nav");
      const mainPageLink = screen.queryByText("Eric's Pizza Palace");

      expect(nav).toContainElement(mainPageLink);
      expect(mainPageLink).toHaveAttribute('href', '/?admin=true');
    });

    it('will display link to add menu item', () => {
      spy.mockReturnValue(true);
      renderNav();
      const nav = screen.queryByTestId("nav");
      const createMenuItemLink = screen.queryByText("Add Menu Item");

      expect(nav).toContainElement(createMenuItemLink);
      expect(createMenuItemLink).toHaveAttribute('href', '/create/?admin=true');
    });
  });
});