import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import HeightFormHandler from "../HeightFormHandler";

describe("HeightFormHandler", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<HeightFormHandler />);
    const heightFormHandler = screen.getByTestId("height-form-handler");

    expect(heightFormHandler).toBeInTheDocument();
  });
});
