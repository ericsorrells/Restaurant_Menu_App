
// ========================================================================
/* Interal */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux"
// import * as redux from 'react-redux';

/* Interal */
import MenuItem from "./MenuItem";
// ========================================================================

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn()
// }));

describe("MenuItem Component", () => {
  const item = {
    id: 1,
    image: "http://someImage.url",
    title: "My Awesome Pizza",
    description: "Lorem ipsum dolor sit",
    price: 14.99,
  };

  const renderMenuItem = () => {
    render(
      <Provider store={}>
        <MenuItem item={item}/>
      </Provider>
    )
  }

  describe('Item Display', () => {
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

  describe('Admin', () => {
    describe('When Not Admin', () => {
      it('should not display delete button', () => {

      });
    });

    describe('When Admin', () => {
      const spy = jest.spyOn(redux, 'useSelector');

      it('will display delete button', () => {
        spy.mockReturnValue(true);
        const { queryByText } = render(<MenuItem item={item} />);
        const deleteButton = queryByText("Delete");
        expect(deleteButton).toBeInTheDocument()
      });

      it('will fire correct action on click', () => {

      });
    });
  });
});