import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import DemandsSector from "../DemandsSector";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("DemandsSector", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<DemandsSector />} />
        </Routes>
      </MemoryRouter>
    );
    const demandsSector = screen.getByTestId("demands-sector");

    expect(demandsSector).toBeInTheDocument();
  });
});
