import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import RegisterForm from "../RegisterForm";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("RegisterForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<RegisterForm />} />
        </Routes>
      </MemoryRouter>
    );
    const registerForm = screen.getByTestId("register-form");

    expect(registerForm).toBeInTheDocument();
  });
});
