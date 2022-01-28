import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Description from "../Description";

describe("Description", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<Description />);
    const description = screen.getByTestId("description");

    expect(description).toBeInTheDocument();
  });
});
