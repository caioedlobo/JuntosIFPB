import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import LoginText from "../LoginText";

describe("LoginText", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<LoginText />);
    const loginText = screen.getByTestId("login-text");

    expect(loginText).toBeInTheDocument();
  });
});
