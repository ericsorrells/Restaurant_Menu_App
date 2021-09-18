
// ========================================================================
/* Interal */
import React from "react";
import { render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

/* Interal */
import Nav  from "./Nav";
// ========================================================================

describe("Nav Component", function () {
  it("should have restaurant name", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("nav")).toHaveTextContent("Eric's Pizza Palace")
  });
});