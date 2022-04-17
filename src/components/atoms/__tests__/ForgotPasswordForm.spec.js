import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import ForgotPasswordForm from "../ForgotPasswordForm";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("ForgotPasswordForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<ForgotPasswordForm />} />
        </Routes>
      </MemoryRouter>
    );
    const forgotPasswordForm = screen.getByTestId("forgot-password-form");

    expect(forgotPasswordForm).toBeInTheDocument();
  });
});
