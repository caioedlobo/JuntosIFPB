import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import ImageLogin from "../ImageLogin";

describe("ImageLogin", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<ImageLogin />);
    const imageLogin = screen.getByTestId("image-login");

    expect(imageLogin).toBeInTheDocument();
  });
});
