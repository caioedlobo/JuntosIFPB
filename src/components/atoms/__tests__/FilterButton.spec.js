import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import FilterButton from "../FilterButton";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("FilterButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<FilterButton />} />
        </Routes>
      </MemoryRouter>
    );
    const filterButton = screen.getByTestId("filter-button");

    expect(filterButton).toBeInTheDocument();
  });
});
