import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import LoggedPage from "../LoggedPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("LoggedPage", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<LoggedPage />} />
        </Routes>
      </MemoryRouter>
    );
    const loggedPage = screen.getByTestId("logged-page");

    expect(loggedPage).toBeInTheDocument();
  });
});
