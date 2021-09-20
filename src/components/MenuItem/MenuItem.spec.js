
// ========================================================================
/* Interal */
import { fireEvent } from "@testing-library/react";
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
    image: "http://someImage.url",
    title: "My Awesome Pizza",
    description: "Lorem ipsum dolor sit",
    price: 14.99,
  };
  const props = {item, dispatch}

  describe('Item Display', () => {
    it("should have item image", () => {
      const { getByTestId } = renderComponent(MenuItem, initialState, props);
      expect(getByTestId("image")).toBeInTheDocument();
    });

    it("should have title", () => {
      const { getByTestId } = renderComponent(MenuItem, initialState, props);
      expect(getByTestId("title")).toHaveTextContent(item.title);
    });

    it("should have item description", () => {
      const { getByTestId } = renderComponent(MenuItem, initialState, props);
      expect(getByTestId("description")).toHaveTextContent(item.description);
    });

    it("should have item price", () => {
      const { getByTestId } = renderComponent(MenuItem, initialState, props);
      expect(getByTestId("price")).toHaveTextContent(item.price);
    });
  });

  describe('Admin', () => {
    describe('When Not Admin', () => {
      it('should not display delete button', () => {
        const { queryByText } = renderComponent(MenuItem, initialState, props);
        const deleteButton = queryByText("Delete");
        expect(deleteButton).not.toBeInTheDocument();
      });
    });

    describe('When Admin', () => {
      const initialState = { user: { admin: true } };

      it('will display delete button', () => {
        const { queryByText } = renderComponent(MenuItem, initialState, props);
        const deleteButton = queryByText("Delete");
        expect(deleteButton).toBeInTheDocument();
      });

      it('will delete menu item after user confirmation', () => {
        const expectedAction = {"id": 1, "type": "menuItems::deleteMenuItem"}
        const confirmSpy = jest.spyOn(window, 'confirm');
        confirmSpy.mockImplementation(jest.fn(() => true));

        const { queryByText } = renderComponent(MenuItem, initialState, props);
        const deleteButton = queryByText("Delete");
        fireEvent.click(deleteButton);

        expect(confirmSpy).toHaveBeenCalledWith("Are you sure you want to delete this menu item?")
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    });
  });
});