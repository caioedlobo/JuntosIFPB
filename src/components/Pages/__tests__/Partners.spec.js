import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Partners from "../Partners";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Partners", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<Partners />} />
        </Routes>
      </MemoryRouter>
    );
    const partners = screen.getByTestId("partners");

    expect(partners).toBeInTheDocument();
  });
});
