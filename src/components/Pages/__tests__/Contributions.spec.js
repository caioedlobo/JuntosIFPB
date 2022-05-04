import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Contributions from "../Contributions";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Contributions", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<Contributions />} />
        </Routes>
      </MemoryRouter>
    );
    const contributions = screen.getByTestId("contributions");

    expect(contributions).toBeInTheDocument();
  });
});
