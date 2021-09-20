
// ========================================================================
/* Interal */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux';

/* Interal */
import InlineEditableField from "./InlineEditableField";
import { useDispatch } from "react-redux";

// ========================================================================

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe("InlineEditableField Component", () => {
  const customHandlerMock = jest.fn();
  const defaultProps = {
    value: "Margheritta Pizza",
    placeholder: "Title",
    className: "SomeComponent__className",
    id: 3,
    isAdmin: true,
    stateKey: "Title",
    autoOpen: false,
    customHandler: customHandlerMock
  };

  describe('Before Being Clicked', () => {
    it('displays the correct data', () => {
      const { getByTestId } = render(<InlineEditableField {...defaultProps}/>);
      expect(getByTestId("textContent")).toBeInTheDocument();
    });

    it('does not display data input field', () => {
      const { queryByTestId } = render(<InlineEditableField {...defaultProps}/>);
      expect(queryByTestId("inputField")).not.toBeInTheDocument();
    });
  });

  describe('When Clicked', () => {
    it('it displays the input field', () => {
      const { getByTestId } = render(<InlineEditableField {...defaultProps}/>);
      const content = getByTestId("textContent");
      fireEvent.click(content);
      expect(getByTestId("inputField")).toBeInTheDocument();
    });

    it('does not display the content data', () => {
      const { queryByTestId } = render(<InlineEditableField {...defaultProps}/>);
      const content = queryByTestId("textContent");
      fireEvent.click(content);
      expect(queryByTestId("textContent")).not.toBeInTheDocument();
    });

    describe('On Submit', () => {
      it('saves edits', () => {
        const mockDispatch = jest.fn();
        useDispatch.mockImplementation(() => mockDispatch);
        const expectedAction = {
          "id": defaultProps.id,
          "payload": {
            "Title": `${defaultProps.value}`
          },
          "type": "menuItems::editMenuItem"
        };

        const { getByTestId } = render(<InlineEditableField {...defaultProps}/>);
        const content = getByTestId("textContent");
        fireEvent.click(content);
        const submitButton = getByTestId("submitIcon");
        fireEvent.click(submitButton);

        expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      });

      it('will fire custom handler', () => {
        const { getByTestId } = render(<InlineEditableField {...defaultProps}/>);
        const content = getByTestId("textContent");
        fireEvent.click(content);
        const submitButton = getByTestId("submitIcon");
        fireEvent.click(submitButton);

        expect(customHandlerMock).toHaveBeenCalled();
      });

      it('returns to the content display', () => {
        const { getByTestId } = render(<InlineEditableField {...defaultProps}/>);
        let content = getByTestId("textContent");
        fireEvent.click(content);
        const submitButton = getByTestId("submitIcon");
        fireEvent.click(submitButton);

        expect(getByTestId("textContent")).toBeInTheDocument();
      });
    });

    describe('On Close', () => {
      it('will remove the input field', () => {
        const { getByTestId } = render(<InlineEditableField {...defaultProps}/>);
        let content = getByTestId("textContent");
        fireEvent.click(content);
        const closeButton = getByTestId("closeIcon");
        fireEvent.click(closeButton);
        content = getByTestId("textContent");

        expect(content).toBeInTheDocument();
      });

      it('will not fire the edit action', () => {
        const mockDispatch = jest.fn();
        useDispatch.mockImplementation(() => mockDispatch);

        const { getByTestId } = render(<InlineEditableField {...defaultProps}/>);
        const content = getByTestId("textContent");
        fireEvent.click(content);
        const closeButton = getByTestId("closeIcon");
        fireEvent.click(closeButton);

        expect(mockDispatch).not.toHaveBeenCalled();
      });
    });

    it('can open directly with input field displayed', () => {
      const newProps = {...defaultProps, autoOpen: true};
      const { getByTestId } = render(<InlineEditableField {...newProps}/>);
      expect(getByTestId("inputField")).toBeInTheDocument();
    });
  });

  describe('When Not Admin', () => {
    it('will not display input field when clicked', () => {
      const newProps = {...defaultProps, isAdmin: false}
      const { queryByTestId } = render(<InlineEditableField {...newProps}/>);
      const content = queryByTestId("textContent");
      fireEvent.click(content);

      expect(queryByTestId("inputField")).not.toBeInTheDocument();
    });
  });
});