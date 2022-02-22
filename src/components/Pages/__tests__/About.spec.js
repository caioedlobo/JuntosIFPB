import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import About from "../About";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("About", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<About />} />
        </Routes>
      </MemoryRouter>
    );
    const about = screen.getByTestId("about");

    expect(about).toBeInTheDocument();
  });
});
