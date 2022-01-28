import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import PasswordText from "../PasswordText";

describe("PasswordText", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<PasswordText />);
    const passwordText = screen.getByTestId("password-text");

    expect(passwordText).toBeInTheDocument();
  });
});
