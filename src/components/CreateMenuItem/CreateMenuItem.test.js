
// ========================================================================
/* Interal */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

/* Interal */
import CreateMenuItem from "./CreateMenuItem";
import { useDispatch, useSelector } from "react-redux";

// ========================================================================

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe("CreateMenuItem Component", () => {
  describe('Create Menu Item Form', () => {
    it('has all the necessary fields', () => {
      const { getByPlaceholderText } = render(<CreateMenuItem />);

      const title = getByPlaceholderText("Title");
      const description = getByPlaceholderText("Description");
      const price = getByPlaceholderText("Price");
      const imageURL = getByPlaceholderText("Image URL");

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(imageURL).toBeInTheDocument();
    });
  });

  it('accepts user input', () => {
    const newTitle = "someNewTitle";
    const { queryByPlaceholderText } = render(<CreateMenuItem />);
    const titleInput = queryByPlaceholderText("Title");
    fireEvent.change(titleInput, { target: { value: newTitle } });

    expect(titleInput.value).toBe(newTitle);
  });

  describe('on submit', () => {
    it('submits the form data', () => {
      const mockDispatch = jest.fn();
      useSelector.mockReturnValue(3);
      useDispatch.mockImplementation(() => mockDispatch);

      const newTitle = "someNewTitle";
      const newDescription = "lorem ipsum";
      const expectedAction = {
        "payload": {
          "description": "lorem ipsum",
          "id": 1, "imageURL": "",
          "price": 0,
          "title": "someNewTitle"
        },
        "type": "menuItems::addMenuItem"
      }

      const { queryByTestId, queryByPlaceholderText } = render(<CreateMenuItem />);
      const submitButton = queryByTestId("submitButton");
      const titleInput = queryByPlaceholderText("Title");
      const descriptionInput = queryByPlaceholderText("Description");

      fireEvent.change(titleInput, { target: { value: newTitle } });
      fireEvent.change(descriptionInput, { target: { value: newDescription } });
      fireEvent.click(submitButton);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});