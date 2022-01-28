import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import LoginButton from "../LoginButton";

describe("LoginButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(<LoginButton classes={{ root: "" }} />);
    const loginButton = screen.getByTestId("login-button");

    expect(loginButton).toBeInTheDocument();
  });
});
