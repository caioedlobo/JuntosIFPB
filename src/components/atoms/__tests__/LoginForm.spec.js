import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import LoginForm from "../LoginForm";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("LoginForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </MemoryRouter>
    );
    const loginForm = screen.getByTestId("login-form");

    expect(loginForm).toBeInTheDocument();
  });
});
