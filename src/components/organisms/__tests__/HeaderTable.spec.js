import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import HeaderTable from "../HeaderTable";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("HeaderTable", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Routes location="/">
          <Route path="/" element={<HeaderTable />} />
        </Routes>
      </MemoryRouter>
    );
    const headerTable = screen.getByTestId("header-table");

    expect(headerTable).toBeInTheDocument();
  });
});
