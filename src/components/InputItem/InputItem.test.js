// ========================================================================
/* Interal */
import React from "react";
import { render } from "@testing-library/react";
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
    const {getByText} = render(<InputItem {...initialState}/>);
    const label = getByText(`${initialState.label}:`)
    expect(label).toBeInTheDocument()
  });

  it('should display the correct input value', () => {
    const {container, debug} = render(<InputItem {...initialState}/>);
    const input = container.querySelector('input')
    expect(input.value).toBe(initialState.value)
  });
});