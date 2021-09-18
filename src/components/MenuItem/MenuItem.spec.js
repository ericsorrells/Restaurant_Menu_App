
// ========================================================================
/* Interal */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

/* Interal */
import MenuItem from "./MenuItem";
// ========================================================================

describe("MenuItem Component", () => {
  const item = {
    id: 1,
    image: "http://someImage.url",
    title: "My Awesome Pizza",
    description: "Lorem ipsum dolor sit",
    price: 14.99,
  };

  it("should have item image", () => {
    const { getByTestId } = render(<MenuItem item={item} />);
    expect(getByTestId("image")).toBeInTheDocument();
  });

  it("should have title", () => {
    const { getByTestId } = render(<MenuItem item={item} />);
    expect(getByTestId("title")).toHaveTextContent(item.title);
  });

  it("should have item description", () => {
    const { getByTestId } = render(<MenuItem item={item} />);
    expect(getByTestId("description")).toHaveTextContent(item.description);
  });

  it("should have item price", () => {
    const { getByTestId } = render(<MenuItem item={item} />);
    expect(getByTestId("price")).toHaveTextContent(item.price);
  });
});