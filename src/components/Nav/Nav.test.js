
// ========================================================================
/* Interal */
import React from "react";
import { render } from "@testing-library/react";
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
      const { queryByTestId } = renderNav();
      const nav = queryByTestId("nav");
      const mainPageLink = queryByTestId("mainPageLink");

      expect(nav).toContainElement(mainPageLink);
      expect(mainPageLink).toHaveAttribute('href', '/');
    });

    it('will not display link to add menu items', () => {
      spy.mockReturnValue(false);
      const { queryByTestId } = renderNav();
      const nav = queryByTestId("nav");
      const createMenuItemLink = queryByTestId("createMenuItemLink");

      expect(nav).not.toContainElement(createMenuItemLink);
    });
  });

  describe('When Admin', () => {
    const spy = jest.spyOn(redux, 'useSelector');

    it('will display link to menu page', () => {
      spy.mockReturnValue(true);
      const { queryByTestId } = renderNav();
      const nav = queryByTestId("nav");
      const mainPageLink = queryByTestId("mainPageLink");

      expect(nav).toContainElement(mainPageLink);
      expect(mainPageLink).toHaveAttribute('href', '/?admin=true');
    });

    it('will display link to add menu item', () => {
      spy.mockReturnValue(true);
      const { queryByTestId } = renderNav();
      const nav = queryByTestId("nav");
      const createMenuItemLink = queryByTestId("createMenuItemLink");

      expect(nav).toContainElement(createMenuItemLink);
      expect(createMenuItemLink).toHaveAttribute('href', '/create/?admin=true');
    });
  });
});