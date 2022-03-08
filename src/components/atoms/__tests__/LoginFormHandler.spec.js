import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import LoginFormHandler from "../LoginFormHandler";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("LoginFormHandler", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<LoginFormHandler />} />
        </Routes>
      </MemoryRouter>
    );
    const loginFormHandler = screen.getByTestId("login-form-handler");

    expect(loginFormHandler).toBeInTheDocument();
  });
});
