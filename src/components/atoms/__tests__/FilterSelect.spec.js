import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import FilterSelect from "../FilterSelect";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("FilterSelect", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<FilterSelect />} />
        </Routes>
      </MemoryRouter>
    );
    const filterSelect = screen.getByTestId("filter-select");

    expect(filterSelect).toBeInTheDocument();
  });
});
