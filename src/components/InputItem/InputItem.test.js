// ========================================================================
/* Interal */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

/* Interal */
import InputItem from "./InputItem";

// ========================================================================

describe("InputItem Component", () => {
  const initialState = {
    label: "Title",
    value: "abc",
    onChangeHandler: jest.fn(),
  }

  it("should display the label", () => {
    render(<InputItem {...initialState}/>);
    const label = screen.getByText(`${initialState.label}:`)
    expect(label).toBeInTheDocument()
  });

  it('should display the correct input value', () => {
    render(<InputItem {...initialState}/>);
    const input = screen.getByPlaceholderText(initialState.label);
    expect(input.value).toBe(initialState.value)
  });
});