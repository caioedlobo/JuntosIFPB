import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import LogoImg from "../LogoImg";

describe("LogoImg", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<LogoImg />);
    const logoImg = screen.getByTestId("logo-img");

    expect(logoImg).toBeInTheDocument();
  });
});
