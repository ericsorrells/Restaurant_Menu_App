
// ========================================================================
/* Interal */
import React from "react";
import { render, screen, userEvent, fireEvent } from "@testing-library/react";
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
      render(<CreateMenuItem />);
      const title = screen.getByPlaceholderText("Title");
      const description = screen.getByPlaceholderText("Description");
      const price = screen.getByPlaceholderText("Price");
      const imageURL = screen.getByPlaceholderText("Image URL");

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(imageURL).toBeInTheDocument();
    });
  });

  it('accepts user input', () => {
    const newTitle = "someNewTitle";
    render(<CreateMenuItem />);
    const titleInput = screen.queryByPlaceholderText("Title");
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

      render(<CreateMenuItem />);
      const submitButton = screen.getByText("Enter");
      const titleInput = screen.queryByPlaceholderText("Title");
      const descriptionInput = screen.queryByPlaceholderText("Description");

      fireEvent.change(titleInput, { target: { value: newTitle } });
      fireEvent.change(descriptionInput, { target: { value: newDescription } });
      fireEvent.click(submitButton);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});