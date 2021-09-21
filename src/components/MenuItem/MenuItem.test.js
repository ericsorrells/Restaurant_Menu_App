
// ========================================================================
/* Interal */
import { fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

/* Interal */
import MenuItem from "./MenuItem";
import renderComponent from "../../utils/testingUtils";

// ========================================================================

describe("MenuItem Component", () => {
  const initialState = { user: { admin: false } }
  const dispatch = jest.fn();
  const item = {
    id: 1,
    description: "Lorem ipsum dolor sit",
    image: "http://someImage.url",
    isAdmin: true,
    price: 14.99,
    title: "My Awesome Pizza",
  };
  const props = { item, dispatch }

  describe('Item Display', () => {
    it("should have item image", () => {
      renderComponent(MenuItem, initialState, props);
      expect(screen.getByTestId("image")).toBeInTheDocument();
    });

    it("should have title", () => {
      renderComponent(MenuItem, initialState, props);
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });

    it("should have item description", () => {
      renderComponent(MenuItem, initialState, props);
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });

    it("should have item price", () => {
      renderComponent(MenuItem, initialState, props);
      expect(screen.getByText(item.price)).toBeInTheDocument();
    });
  });

  describe('Admin', () => {
    describe('When Not Admin', () => {
      it('should not display delete button', () => {
        renderComponent(MenuItem, initialState, props);
        const deleteButton = screen.queryByText("Delete");
        expect(deleteButton).not.toBeInTheDocument();
      });
    });

    describe('When Admin', () => {
      const initialState = { user: { admin: true } };

      it('will display delete button', () => {
        renderComponent(MenuItem, initialState, props);
        const deleteButton = screen.queryByText("Delete");
        expect(deleteButton).toBeInTheDocument();
      });

      it('will delete menu item after user confirmation', () => {
        const expectedAction = { "id": 1, "type": "menuItems::deleteMenuItem" }
        const confirmSpy = jest.spyOn(window, 'confirm');
        confirmSpy.mockImplementation(jest.fn(() => true));

        renderComponent(MenuItem, initialState, props);
        const deleteButton = screen.queryByText("Delete");
        fireEvent.click(deleteButton);

        expect(confirmSpy).toHaveBeenCalledWith("Are you sure you want to delete this menu item?")
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    });
  });
});