import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Home from "../Home";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    const home = screen.getByTestId("home");

    expect(home).toBeInTheDocument();
  });
});
