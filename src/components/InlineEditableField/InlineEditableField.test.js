
// ========================================================================
/* Interal */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

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
      render(<InlineEditableField {...defaultProps}/>);
      expect(screen.getByText(defaultProps.value)).toBeInTheDocument();
    });

    it('does not display data input field', () => {
      render(<InlineEditableField {...defaultProps}/>);
      expect(screen.queryByPlaceholderText(defaultProps.placeholder)).not.toBeInTheDocument();
    });
  });

  describe('When Clicked', () => {
    it('it displays the input field', () => {
      render(<InlineEditableField {...defaultProps}/>);
      const content = screen.getByText(defaultProps.value);
      fireEvent.click(content);
      expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
    });

    it('does not display the content data', () => {
      render(<InlineEditableField {...defaultProps}/>);
      const content = screen.queryByText(defaultProps.value);
      fireEvent.click(content);
      expect(screen.queryByText(defaultProps.value)).not.toBeInTheDocument();
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

        render(<InlineEditableField {...defaultProps}/>);
        const content = screen.getByText(defaultProps.value);
        fireEvent.click(content);
        const submitButton = screen.getByTestId("submitIcon");
        fireEvent.click(submitButton);

        expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      });

      it('will fire custom handler', () => {
        render(<InlineEditableField {...defaultProps}/>);
        const content = screen.getByText(defaultProps.value);
        fireEvent.click(content);
        const submitButton = screen.getByTestId("submitIcon");
        fireEvent.click(submitButton);

        expect(customHandlerMock).toHaveBeenCalled();
      });

      it('returns to the content display', () => {
        render(<InlineEditableField {...defaultProps}/>);
        const content = screen.getByText(defaultProps.value);
        fireEvent.click(content);
        const submitButton = screen.getByTestId("submitIcon");
        fireEvent.click(submitButton);

        expect(screen.getByText(defaultProps.value)).toBeInTheDocument();
      });
    });

    describe('On Close', () => {
      it('will remove the input field', () => {
        render(<InlineEditableField {...defaultProps}/>);
        const content = screen.getByText(defaultProps.value);
        fireEvent.click(content);
        const closeButton = screen.getByTestId("closeIcon");
        fireEvent.click(closeButton);
        const newContent = screen.getByText(defaultProps.value);

        expect(newContent).toBeInTheDocument();
      });

      it('will not fire the edit action', () => {
        const mockDispatch = jest.fn();
        useDispatch.mockImplementation(() => mockDispatch);

        render(<InlineEditableField {...defaultProps}/>);
        const content = screen.getByText(defaultProps.value);
        fireEvent.click(content);
        const closeButton = screen.getByTestId("closeIcon");
        fireEvent.click(closeButton);

        expect(mockDispatch).not.toHaveBeenCalled();
      });
    });

    it('can open directly with input field displayed', () => {
      const newProps = {...defaultProps, autoOpen: true};
      render(<InlineEditableField {...newProps}/>);
      expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
    });
  });

  describe('When Not Admin', () => {
    it('will not display input field when clicked', () => {
      const newProps = {...defaultProps, isAdmin: false}
      render(<InlineEditableField {...newProps}/>);
      const content = screen.getByText(defaultProps.value);
      fireEvent.click(content);

      expect(screen.queryByPlaceholderText(defaultProps.placeholder)).not.toBeInTheDocument();
    });
  });
});